# 认证模块

## 获取当前用户信息

### 路径

<Route method="GET" :auth="true" path="/api/user" />

### 参数

无

### 响应

- `user`：当前登录用户信息

#### `user`

- `id`：自增长用户 id
- `uno`学号
- `email`：邮箱，为空 <Badge text="可选"/>
- `phone`：手机，为空 <Badge text="可选"/>
- `user_type`：用户类型（1：学生，2：教师，3：研究生）
- `user_group`：用户组（默认为普通用户）
- `avatar`：头像，为空
- `created_at`：创建时间
- `updated_at`：更新时间

#### `ext`

##### `terms`：学期设置

- `exam_term`：排考学期
- `class_term`：课表学期
- `score_term`：成绩学期

##### `school_info`：学校信息

- `id`：自增长 id
- `iid`：身份证号
- `sex`：性别
- `uno`：学号
- `name`：姓名
- `class`：班级
- `grade`：年级
- `major`：专业
- `gender`：无用属性，恒为 0
- `college`：学院
- `students`：生源地
- `created_at`：创建时间
- `updated_at`：更新时间

##### `wechat_info`：微信信息

- `avatar`：头像
- `nickname`：昵称
- `subscribe`：关注状态

##### `passwords_bind`：密码绑定状态

- `jh_password`：精弘密码绑定
- `yc_password`：原创密码绑定
- `zf_password"`：正方密码绑定
- `lib_password"`：图书馆密码绑定
- `card_password`：校园卡密码绑定

注：图书馆和校园卡密码自动完成绑定

### 状态

| 错误码 | 状态     |
| ------ | -------- |
| 200    | 请求成功 |
| -1     | 请求失败 |

### 例子

```json
{
  "errcode": 200,
  "errmsg": "登陆成功",
  "data": {
    "user": {
      "id": 9129,
      "uno": "201706061819",
      "email": null,
      "phone": null,
      "user_type": 1,
      "user_group": { "group_name": "普通用户", "permission": [] },
      "avatar": "",
      "ext": {
        "terms": {
          "exam_term": "2019/2020(1)",
          "class_term": "2019/2020(1)",
          "score_term": "2019/2020(1)"
        },
        "school_info": {
          "id": 20379,
          "iid": "330302199900000000",
          "sex": "男",
          "uno": "201706060000",
          "name": "张三",
          "class": "电气通信与计算机类201718班",
          "grade": "2017",
          "major": "电气通信与计算机类",
          "gender": 0,
          "college": "计算机学院",
          "students": "浙江省",
          "created_at": "2017-09-09 03:05:59",
          "updated_at": "2017-09-09 03:05:59"
        },
        "wechat_info": {
          "avatar": null,
          "nickname": null,
          "subscribe": false
        },
        "passwords_bind": {
          "jh_password": 1,
          "yc_password": 0,
          "zf_password": 1,
          "lib_password": 1,
          "card_password": 1
        }
      },
      "created_at": "2017-11-15 04:18:21",
      "updated_at": "2019-12-04 21:30:52"
    },
    "token": "xxxx"
  },
  "redirect": null
}
```

## 用户登录（含第三方登录）

### 路径

<Route method="POST" :auth="false" path="/api/login" />

### 备注

该 API 接受用户名与密码，当 `type` 存在且不为 `default` 时可建立第三方登录关联。

### 参数

- `username`：用户名
- `password`：用户密码
- `type`：第三方登录类型（`wechat`, `weapp` 或 `default`） <Badge text="可选" />
- `openid`：第三方登录的用户标识 <Badge text="可选" />

### 响应

- `token`：token
- `user`：当前登录用户信息

### 状态

| 错误码 | 状态                         |
| ------ | ---------------------------- |
| 200    | 登录成功                     |
| -400   | openid 为空                  |
| -401   | 用户名或密码错误             |
| -401   | token 生成错误               |
| -500   | token 生成错误               |
| -500   | 反射错误（不支持的登录类型） |

### 例子

```json
{
  "errcode": 200,
  "errmsg": "登陆成功",
  "data": {
    "user": {},
    "token": "xxxx"
  },
  "redirect": null
}
```

## 第三方认证登录

### 路径

<Route method="POST" :auth="false" path="/api/autoLogin" />

### 参数

- `type`：第三方登录类型
- `openid`：第三方登录的用户标识

### 响应

- `token`：token
- `user`：当前登录用户

### 状态

| 错误码 | 状态           |
| ------ | -------------- |
| 200    | 登录成功       |
| -401   | 缺少用户标识   |
| -401   | token 生成错误 |
| -403   | 自动登录失败   |
| -500   | token 生成错误 |

### 例子

```json
{
  "errcode": -403,
  "errmsg": "自动登录失败",
  "data": null,
  "redirect": null
}
```

## 注册（激活账号）

### 路径

<Route method="POST" :auth="false" path="/api/register" />

### 参数

- `username`：用户名
- `password`：用户密码
- `iid`：身份证号
- `email`：电子邮箱

### 响应

无

### 状态

| 错误码 | 状态     |
| ------ | -------- |
| 1      | 激活成功 |
| -1     | 操作失败 |

### 例子

```json
{
  "errcode": -1,
  "errmsg": "该通行证已经存在，请重新输入",
  "data": null,
  "redirect": null
}
```

## 重置密码

### 路径

<Route method="POST" :auth="false" path="/api/forgot" />

### 参数

- `username`：用户名
- `password`：新密码
- `iid`：用户身份证号

### 响应

无

### 状态

| 错误码 | 状态         |
| ------ | ------------ |
| 1      | 重置密码成功 |
| -1     | 操作失败     |

### 例子

```json
{
  "errcode": -1,
  "errmsg": "身份证号码不正确",
  "data": null,
  "redirect": null
}
```

```json
{
  "errcode": 1,
  "errmsg": "重置密码成功",
  "data": null,
  "redirect": null
}
```
