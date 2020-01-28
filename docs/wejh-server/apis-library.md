# 图书馆模块

## 获取借书信息

### 路径

<Route method="GET" :auth="true" path="/api/library/borrow" />

### 参数

无

### 响应

- `borrow_list`：借书清单
- `session`：会话信息（对客户端而言没有作用）
- `borrow_num`：借书数量
- `overdue`：超期本数
- `debt`：欠款金额

#### `borrow_list`

- `书名`：value['title'];
- `馆藏号`：value['collection_code'];
- `馆藏地`：value['collection_address'];
- `借书时间`：value['borrow_date'];
- `借书日期`：date('Y-m-d', strtotime(\$value['borrow_date']));
- `应还日期`：value['return_date'];
- `续借次数`：value['renew'];
- `超期情况`：value['status'];
- `超期天数`：intval($value['status']) ? intval($value['status']) : 0;

### 状态

| 错误码 | 状态             |
| ------ | ---------------- |
| 1      | 获取借阅信息成功 |
| -1     | 没有认证信息     |
| -1     | 服务器错误       |
| -1     | 账号错误         |

### 例子

```json
{
  "errcode": 1,
  "errmsg": "获取借阅信息成功",
  "data": {
    "borrow_list": [
      {
        "书名": "全国计算机等级考试三级教程 网络技术 2018年版",
        "馆藏号": "72376086",
        "馆藏地": "屏峰中文书库",
        "借书时间": "2020-01-04 14:58:33",
        "借书日期": "2020-01-04",
        "应还日期": "2020-02-13",
        "续借次数": "0",
        "超期情况": "未超期"
      }
    ],
    "session": {},
    "borrow_num": "1",
    "overdue": "0",
    "debt": "1.80"
  },
  "redirect": null
}
```

## 绑定图书馆账号

### 路径

<Route method="POST" :auth="true" path="/api/library/bind" />

### 备注

该 API 修改微精弘服务端中记录的图书馆密码，并接数据服务器进行验证。

### 参数

- `password`：图书馆密码

### 响应

[用户数据对象](./apis-auth.html)

### 状态

| 错误码 | 状态                           |
| ------ | ------------------------------ |
| 1      | 绑定图书馆账号成功（密码正确） |
| -1     | 没有认证信息                   |
| -1     | 用户名或密码错误（或其他错误） |

### 例子

```json
{
  "errcode": 1,
  "errmsg": "绑定图书馆账号成功",
  "data": {
    "id": "id",
    "uno": "uno",
    "...": "..."
  },
  "redirect": null
}
```
