
import Root from '@/components/layout/root'
import ConnectWallet from './views/connect-wallet'
import CallAbi from './views/call-abi'

const route = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <ConnectWallet />,
      },
      {
        path: "call-abi",
        element: <CallAbi />,
      },
      
    ]
  }
]

export default route