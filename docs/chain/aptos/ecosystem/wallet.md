# Aptos 上的钱包

为啥都没有获取帐号余额的功能。和 Move 本身的设计有关？

## [Petra](https://petra.app/)
EOA 类型的钱包(需要助记词)。 Aptos 官方出品。

[开发文档](https://petra.app/docs/petra-intro)

### 连接
```
const isPetraInstalled = window.aptos;
const getAptosWallet = () => {
  if ('aptos' in window) {
    return window.aptos;
  } else {
    window.open('https://petra.app/', `_blank`);
  }
};
```

### 发送交易
```js
// https://petra.app/docs/sending-a-transaction
const wallet = getAptosWallet(); // see "Connecting"

// Example Transaction, following an [EntryFunctionPayload](https://github.com/aptos-labs/aptos-core/blob/main/ecosystem/typescript/sdk/src/generated/models/EntryFunctionPayload.ts#L8-L21)
const transaction = {
  arguments: [address, '717'],
  function: '0x1::coin::transfer',
  type: 'entry_function_payload',
  type_arguments: ['0x1::aptos_coin::TestCoin'],
};

try {
  const pendingTransaction = await(
    window as any,
  ).aptos.signAndSubmitTransaction(transaction);

  // In most cases a dApp will want to wait for the transaction, in these cases you can use the typescript sdk
  const client = new AptosClient('https://testnet.aptoslabs.com');
  const txn = await client.waitForTransactionWithResult(
    pendingTransaction.hash,
  );
} catch (error) {
  // see "Errors"
}
```

## [Martian wallet](https://docs.martianwallet.xyz/)
> Martina wallet 是目前已上线测试版的Aptos 钱包里面流量最大的产品，据官方数据，目前下载量已经超过100,000，也是目前Aptos 生态项目支持最多的钱包。 (2022/08/30)

[开发文档](https://docs.martianwallet.xyz/docs/integration/establishing-a-connection)

## 链接
* [Aptos 钱包使用指南](https://mp.weixin.qq.com/s/1T_PpcWGaY02HDs5bivqAA) 一些 Aptos 介绍的钱包。