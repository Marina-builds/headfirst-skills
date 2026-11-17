"""Run with Python 3 to try version-bound FAQ review using sample text."""
import hashlib


def fingerprint(answer):
    return hashlib.sha256(answer.encode("utf-8")).hexdigest()


def submit(reviewed_version, latest_answer):
    if reviewed_version != fingerprint(latest_answer):
        return "提案已更新，请重新审核"
    return "当前版本可以提交"


if __name__ == "__main__":
    first = "在表格右上角选择导出 CSV。"
    second = "管理员可以在表格右上角选择导出 CSV。"
    draft = fingerprint(first)
    print(submit(draft, first))
    print(submit(draft, second))
    assert submit(draft, first) != submit(draft, second)
