## 清除浮動
.clearfix  

## 媒體
media object

## 提示標誌
BADGE

## 列表
"list-group-item list-group-flush"
```javascript
<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action">A simple default list group item</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-primary">A simple primary list
    group item</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-secondary">A simple secondary
    list group item</a>
...
</div>
```
 [其餘參考官網]
(https://getbootstrap.com/docs/4.6/components/list-group/)

## 按鈕群組  
btn-group
btn-toolbar
btn-group-vertical

dropup, dropright
(https://getbootstrap.com/docs/4.6/components/dropdowns/#dropup)

## nav  
.nav
.nav flex-column (垂直)
.nav justify-content-{位置}

.nav nav-tabs
.nav nav-pills
.nav nav-justified

## navbar  
.navbar navber-expand-lg navbar-light bg-light

```javascript
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container  ">
        <a href="#" class="navbar-brand">host name</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul >
            <li>...
            </li>
          </ul>
          <form >
            ...
          </form>
        </div>
      </div>
    </nav>
```