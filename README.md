# 巡检报告

## 需求

### 巡检报告生成(修改)

1. 从 url 中获取 baseInfo(生成)或 id（修改）
2. 从后台获取模板信息 或 预览信息
3. 数据编辑
4. 信息保存

### 巡检报告预览

1. 请求数据
2. 展示数据

### 模拟请求路径

1. ADD URL ?category_code=PC200-5000&template_version=1&brand_code=cp-2020&tonner_code=3100&machine_code=3210&model_code=321&machine_no=6&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiQXV0aG9yaXphdGlvblNlcnZlciJdLCJ1c2VyX25hbWUiOiJhZG1pbiIsInNjb3BlIjpbImFwaSJdLCJncm91cGlkIjoidHlfb2F1dGhfaGJ4cyIsImV4cCI6MTYwMzI2NjI2OCwianRpIjoiZGNiNDMxNGUtZDJiZC00NWRjLWFjMWUtYmRlMGIzYzI2Mzc5IiwiY2xpZW50X2lkIjoiY2xpZW50X3Bhc3NfMSIsInVzZXJuYW1lIjoiYWRtaW4ifQ.DIYw5HES99X-mwwA48cJkZq8nAvrHW8dKuuqoSq3i0o
2. PRE URL ?showTitleBar=0&id=1318477031972212737&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiQXV0aG9yaXphdGlvblNlcnZlciJdLCJ1c2VyX25hbWUiOiJhZG1pbiIsInNjb3BlIjpbImFwaSJdLCJncm91cGlkIjoidHlfb2F1dGhfaGJ4cyIsImV4cCI6MTYwMzI2NjI2OCwianRpIjoiZGNiNDMxNGUtZDJiZC00NWRjLWFjMWUtYmRlMGIzYzI2Mzc5IiwiY2xpZW50X2lkIjoiY2xpZW50X3Bhc3NfMSIsInVzZXJuYW1lIjoiYWRtaW4ifQ.DIYw5HES99X-mwwA48cJkZq8nAvrHW8dKuuqoSq3i0o

如何跳出此页面。

### 注意

由于使用到了定位，所以需要部署在 https 环境中。
