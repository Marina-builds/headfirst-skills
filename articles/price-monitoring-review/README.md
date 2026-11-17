# 让同一条价格变动跑两次

拿一条演示记录试一下。官网价和人工确认价都是 12，程序里还存着 10。第一次运行应该留下一条待更新记录。保持输入不变再跑一次，应当找回同一条。等程序里的价格也变成 12，才结束处理。这里最容易漏测的，恰好是第二次运行。

教学用示例，可复制后填入自己的记录。[打开配套材料](retry-cases.csv)

## Run the same price change twice

In the sample, the source and the reviewer both say 12, while the system still holds 10. The first run needs a pending update. Run it again before changing the stored price and it should find the same update. Only after the stored price reaches 12 is the discrepancy resolved.

[Open the companion file](retry-cases.csv)
