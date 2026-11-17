"""Synthetic teaching demo, not the company report validator.

Run with Python 3. Checks only subject/value pairs, metric/unit/period
comparability, and descending rank groups (equal values share a group).
It does not check source authenticity, free-text claims or arbitrary HTML.
"""
import json

FACTS = [
    {"subject": "A", "value": 120, "metric": "sample_count", "unit": "count", "period": "synthetic-period"},
    {"subject": "B", "value": 80, "metric": "sample_count", "unit": "count", "period": "synthetic-period"},
]


def validate(facts, displayed, ranking):
    errors = []
    subjects = [f["subject"] for f in facts]
    if len(subjects) != len(set(subjects)):
        return {"passed": False, "errors": ["duplicate_subject"]}
    if set(displayed) != set(subjects):
        errors.append("subject_set_mismatch")
    for fact in facts:
        if displayed.get(fact["subject"]) != fact["value"]:
            errors.append("value_mismatch:" + fact["subject"])
    if len({(f["metric"], f["unit"], f["period"]) for f in facts}) != 1:
        errors.append("not_comparable")
    else:
        expected = [sorted(f["subject"] for f in facts if f["value"] == value)
                    for value in sorted({f["value"] for f in facts}, reverse=True)]
        if [sorted(group) for group in ranking] != expected:
            errors.append("ranking_conflict")
    return {"passed": not errors, "errors": errors}


if __name__ == "__main__":
    scenarios = [
        ("wrong_report", FACTS, {"A": 80, "B": 120}, [["B"], ["A"]], False),
        ("correct_report", FACTS, {"A": 120, "B": 80}, [["A"], ["B"]], True),
        ("different_period", [FACTS[0], dict(FACTS[1], period="other-period")], {"A": 120, "B": 80}, [["A"], ["B"]], False),
        ("tie", [FACTS[0], dict(FACTS[1], value=120)], {"A": 120, "B": 120}, [["A", "B"]], True),
    ]
    results = []
    for name, facts, display, ranking, expected in scenarios:
        result = validate(facts, display, ranking)
        assert result["passed"] == expected, name
        results.append({"scenario": name, "input": facts, "display": display,
                        "ranking": ranking, "result": result})
    print(json.dumps({"scope": "Synthetic teaching demonstration; no source or HTML verification", "runs": results}, indent=2))
