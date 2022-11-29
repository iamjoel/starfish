import React from 'react'
import { Outlet, Link } from "react-router-dom"
import s from './style.module.css'

const Root = () => {
  return (
    <div className={s.main}>
        <div className={s.left}>
            <div>目录</div>
            <Link className={s.link} to="/">连接到 MetaMask</Link>
            <Link className={s.link} to="/call-abi">与智能合约交互</Link>
        </div>
        <div className={s.right}>
            <Outlet/>
        </div>
    </div>
  )
}

export default React.memo(Root)