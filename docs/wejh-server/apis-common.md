# 公共模块

## 通知

### 路径

<Route method="GET" :auth="false" path="/api/announcement" />

### 参数

无

### 响应

- `id`：公告 ID
- `show`：是否显示公告
- `title`：公告标题
- `content`：公告内容 <Badge text="HTML"/>
- `footer`：公告脚注
- `clipboard`：公告可复制内容
- `clipboardTip`：公告可复制内容的提示

### 状态

| 错误码 | 状态 |
| ------ | ---- |
| 1      | ok   |

### 例子

```json
{
  "errcode": 1,
  "errmsg": "ok",
  "data": {
    "id": "29",
    "show": true,
    "title": "",
    "content": "<p>人是铁，饭是钢。</p><p>微精弘恰饭列表：</p><p>- 氢动简学车</p><p>微精弘平台仅为以上小程序提供便捷入口，其服务由相应的服务商提供。</p>",
    "footer": "最近修复了课表多周的问题，请同学重新检查一下课表，有任何微精弘问题，请加QQ群:462530805",
    "clipboard": "",
    "clipboardTip": ""
  },
  "redirect": null
}
```

## 应用列表

### 路径

<Route method="GET" :auth="false" path="/api/app-list" />

### 参数

无

### 响应

#### `icons`

- `bg`：背景颜色（`red`，`green`，`blue`，`yellow` 或 `purple`）
- `icon`：应用图标
- `card`：应用卡片背景 <Badge text="可选"/>

#### `app-list`

##### 通用参数

- `title`：应用标题
- `bg`：背景颜色（`red`，`green`，`blue`，`yellow` 或 `purple`）
- `icon`：应用图标 <Badge text="可选"/>
- `disabled`：是否禁用 <Badge text="可选"/>

##### 小程序内跳转

- `route`：应用路由

##### 小程序内跳转

- `url`：目标页面地址

##### 转入其他小程序

- `appId`：目标小程序 ID
- `-path`：目标小程序路由

##### 小程序端处理

- `module`：模块标识

### 状态

| 错误码 | 状态 |
| ------ | ---- |
| 1      | ok   |

### 例子

```json
{
  "errcode": 1,
  "errmsg": "ok",
  "data": {
    "icons": {
      "timetable": {
        "bg": "blue",
        "icon": "http://cdn.wejh.imcr.me/img/app-list/timetable.png",
        "card": "http://cdn.wejh.imcr.me/img/card-background/timetable.png"
      },
      "score": {
        "bg": "red",
        "icon": "http://cdn.wejh.imcr.me/img/app-list/score.png"
      },
      "exam": {
        "bg": "green",
        "icon": "http://cdn.wejh.imcr.me/img/app-list/exam.png"
      },
      "freeroom": {
        "bg": "red",
        "icon": "http://cdn.wejh.imcr.me/img/app-list/freeroom.png"
      },
      "student": {
        "bg": "purple",
        "icon": "http://cdn.wejh.imcr.me/img/app-list/student.png"
      },
      "teacher": {
        "bg": "purple",
        "icon": "http://cdn.wejh.imcr.me/img/app-list/teacher.png"
      },
      "card": {
        "bg": "yellow",
        "icon": "http://cdn.wejh.imcr.me/img/app-list/card.png",
        "card": "http://cdn.wejh.imcr.me/img/card-background/card.png"
      },
      "borrow": {
        "bg": "blue",
        "icon": "http://cdn.wejh.imcr.me/img/app-list/borrow.png",
        "card": "http://cdn.wejh.imcr.me/img/card-background/borrow.png"
      },
      "tri": {
        "bg": "blue",
        "icon": "",
        "card": "http://cdn.wejh.imcr.me/img/card-background/tri.png"
      },
      "publicity": {
        "bg": "red",
        "icon": "http://cdn.wejh.imcr.me/img/app-list/publicity.png"
      },
      "square": {
        "bg": "blue",
        "icon": "http://cdn.wejh.imcr.me/img/app-list/square.png"
      }
    },
    "app-list": [
      {
        "title": "课表查询",
        "route": "/pages/timetable/timetable",
        "bg": "blue",
        "icon": "http://cdn.wejh.imcr.me/img/app-list/timetable.png",
        "disabled": false
      },
      {
        "title": "成绩查询",
        "route": "/pages/score/score",
        "bg": "red",
        "icon": "http://cdn.wejh.imcr.me/img/app-list/score.png"
      },
      {
        "title": "考试安排",
        "route": "/pages/exam/exam",
        "bg": "green",
        "icon": "http://cdn.wejh.imcr.me/img/app-list/exam.png"
      },
      {
        "title": "空教室",
        "route": "/pages/freeroom/freeroom",
        "bg": "red",
        "icon": "http://cdn.wejh.imcr.me/img/app-list/freeroom.png"
      },
      {
        "title": "吐个槽",
        "module": "feedback",
        "bg": "blue",
        "icon": "http://cdn.wejh.imcr.me/img/app-list/square.png"
      },
      {
        "title": "一卡通",
        "route": "/pages/card/card",
        "bg": "yellow",
        "icon": "http://cdn.wejh.imcr.me/img/app-list/card.png"
      },
      {
        "title": "借阅信息",
        "route": "/pages/borrow/borrow",
        "bg": "blue",
        "icon": "http://cdn.wejh.imcr.me/img/app-list/borrow.png"
      },
      {
        "title": "氢动简学车",
        "bg": "yellow",
        "icon": "http://cdn.wejh.imcr.me/img/app-list/qingdong.png",
        "path": "/pages/index/index?codefrom=wejh_jxhtech",
        "appId": "wxb5abdabfd36aca7a"
      },
      {
        "title": "绑定服务号",
        "bg": "red",
        "url": "http://server.wejh.imcr.me/oauth/wechat/loginByUno?uno=%7Buno%7D"
      }
    ]
  },
  "redirect": null
}
```

## 获取学期时间

### 路径

<Route method="GET" :auth="false" path="/api/time" />

### 参数

无

### 响应

- `term`：当前学期，例：`2019/2020(1)`
- `month`：当前月份（1-12）
- `day`：当前日（1-7）
- `week`：当前周次（0+）
- `is_begin`：学期是否开始（周次 > 0）

### 状态

| 错误码 | 状态         |
| ------ | ------------ |
| 1      | 获取时间成功 |

### 例子

```json
{
  "errcode": 1,
  "errmsg": "获取时间成功",
  "data": {
    "term": "2019/2020(1)",
    "month": "12",
    "week": 13,
    "day": 6,
    "is_begin": true
  },
  "redirect": null
}
```
