# 交换两行，看看哪一步发现错误

A 的样本数是 120，B 是 80。错误成品把 A 写成 80、B 写成 120，摘要也跟着写 B 第一。把检查脚本跑起来，第一组输出会分别报出 value_mismatch:A、value_mismatch:B 和 ranking_conflict。继续看不同周期和并列两组，你能区分「排错了」和「根本不该排」。

合成样例，可在本机用 Python 3 运行。[打开配套材料](report-consistency-demo.py)

## Swap two rows and inspect the errors

The first synthetic case swaps A = 120 and B = 80. Inspect the two value_mismatch errors and the ranking_conflict. Then run the mixed-period and tie cases to distinguish a wrong order from an invalid comparison.

[Open the companion file](report-consistency-demo.py)
