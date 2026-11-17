# 故意把结果写反

用 A 为 120、B 为 80 的合成数据。把两行数值对调，连摘要一起改成 B 第一，总数依然是 200。运行配套检查器，看它能不能分别指出对象错配和排名矛盾。这个练习对应报告生成后的验收步骤，输入可信度还要回到来源核对。

合成样例，可在本机用 Python 3 运行。[打开配套材料](report-consistency-demo.py)

## Deliberately reverse the output

Start with synthetic values A = 120 and B = 80. Swap the displayed values and name B first in the summary. The total remains 200. Run the checker and inspect the separate errors for the two values and the ranking. Verifying the input source is a separate step.

[Open the companion file](report-consistency-demo.py)
