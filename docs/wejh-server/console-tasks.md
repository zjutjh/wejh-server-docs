# 控制台命令

## AsyncWechatOpenId

标识：`async:openid`

描述：同步所有用户的 `openid`

::: tip 提示

微信平台中所有的用户通过 `openId` 进行标识。获取用户 `openId` 的方法见：[用户 | EasyWechat](https://www.easywechat.com/docs/master/official-account/user)

:::

## GitPull

标识：`git:pull {ref}`

描述：获取最新的仓库代码

::: tip 提示

仅当仓库处于默认分支时执行有效，相当于执行
``` bash
cd $basePath
git reset --hard
git pull >/dev/null &
```

:::

## SendMessage

标识：`message:send`

描述：发送微信模板消息

::: warning 提示

该命令目前没有实现

:::

## UserCensus

标识：`user:census`

描述：统计当前用户数量

备注：定时任务，每天午夜执行
