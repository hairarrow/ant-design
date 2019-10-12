---
order: 100
title:
  en-US: Ribbon
---

## en-US

A ribbon style

```jsx
import { Badge } from 'antd';

const { Ribbon } = Badge;

ReactDOM.render(
  <div>
    <Ribbon text="Ribbon Text">
      <div className="example-card" />
    </Ribbon>
  </div>,
  mountNode,
);
```

<style>
.ant-badge:not(.ant-badge-not-a-wrapper) {
  margin-right: 20px;
}
.example-card {
  width: 140px;
  height: 42px;
  border-radius: 4px;
  background: #eee;
  display: inline-block;
  vertical-align: middle;
}
</style>
