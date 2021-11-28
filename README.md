# about-router
关于react router V6 

* Switch 全部改为 Routes

```jsx
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {* 上面的优点一:path是相对的 *}
        {* 上面的优点三:path 不用加'*' *}
        <Route path="users" element={<Users />}>
          {* 上面的优点二: 无需按顺序 *}
          {* 上面的优点三: 路由可以嵌套在一个地方 *}
          <Route path="me" element={<OwnUserProfile />} />
          <Route path=":id" element={<UserProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>

```
```jsx
      <nav>
        {* 上面的优点一: <Link to>是相对的 *}
        <Link to="me">My Profile</Link>
      </nav>

```

```jsx
    <Routes>
        <Route path="/" element={<Home />} />
        {* 不是嵌套就需要尾部加上*号 *}
        <Route path="users/*" element={<Users />} />
    </Routes>
```

* Route
```jsx
  {* Route 的 render 或 component 改为 element *}
  <Route path=":userId" element={<Profile animate={true} /> />
  
  {* v6 Route 的 children 是用于嵌套路由  *}
  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users" element={<Users />}>
          <Route path="me" element={<OwnUserProfile />} />
          <Route path=":id" element={<UserProfile />} />
        </Route>
      </Routes>
      
 {* <Route caseSensitive={true}> 匹配时是否忽略大小写 *}
 
 {* <Route index>  index 即表示是否是主路由，如果设置为 true 的话不能有 children *}
  <Route index element={<Home />} />
  <Route path="about" element={<About />}/>
  
  
 {* <Layout /> 与 <Outlet /> *}
 {* 组件 <Layout/> 一般作为 parent route 的element，除了渲染一些公共的UI外， 其中的<Outlet/> 的作用类似插槽，用于匹配子路由的 element *}
 
 
 {* useRoutes 生成对应的 element *}
 const element = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: 'auth/*',
          element: <Auth/>
        },
        {
          path: 'basic/*',
          element: <Basic/>
        }
      ]
    }
  ])
  return (
     {element}
  )
 
```

* Link

```jsx
    {* <Link to> *}
    <Route path="app">
      <Route path="dashboard">
        <Route path="stats" />
      </Route>
    </Route>

    {* 当前 URL 为 /app/dashboard 或 /app/dashboard/ *}
    <Link to="stats">               => <a href="/app/dashboard/stats">
    <Link to="../stats">            => <a href="/app/stats">
    <Link to="../../stats">         => <a href="/stats">
    <Link to="../../../stats">      => <a href="/stats">

  {* 统一为 to='..' 是基于父级 Route 的 path *}
    <Routes>
      <Route path="users">
        <Route
          path=":id/messages"
          element={
            // 最终是/users, 而不是/:id
            <Link to=".." />
          }
        />
      </Route>
    </Routes>
    
    {* <Link state> 即点击后可以给 to 传对应的 state *}
    
    {* <Link replace> replace:boolean，默认 false，即跳转路由要用 push 还是 replace *}
    
    {* <Link target> 类型如下*}
    type HTMLAttributeAnchorTarget =
        | '_self'
        | '_blank'
        | '_parent'
        | '_top'
        | (string & {});

```

* useHistory 换成了 useNavigate
``` js
  import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/home");  // history.push('/home')
    navigate('/home', { replace: true });  // history.replace('/home')
    // naviaget(to: number)就是 history.go
    navigate(-2)
    
    // naviagete 与<Link to>一样， 输入参数类似 cd 命令行

  }
  return (
    <div>
      <button onClick={handleClick}>go home</button>
    </div>
  );
}

```
