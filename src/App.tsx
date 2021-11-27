import * as React from 'react'
import type { RouteObject } from 'react-router-dom'
import { useRoutes } from 'react-router-dom'
import { Course, Courses, Home, Layout, NoMatch, Other } from './pages'
import CoursesIndex from './pages/courseIndex'

export default function App() {
  let routes: RouteObject[] = [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: '/courses1',
          element: <Courses />,
          children: [
            { index: true, element: <CoursesIndex /> },
            { path: '/courses/:id', element: <Course /> },
          ],
        },
        { path: '*', element: <NoMatch /> },
      ],
    },
    {
      path: '/other',
      element: <Other />,
    },
  ]

  let element = useRoutes(routes)

  return <div>{element}</div>
}
