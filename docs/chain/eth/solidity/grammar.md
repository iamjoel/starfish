# Grammar
[Solidity by Example](https://solidity-by-example.org/)

```
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Demo {
    uint public count;

    function get() public view returns (uint) {
        return count;
    }

    function inc() public {
        count += 1;
    }
}
```

## 原始数据类型
boolean, uint, int, address。

uint:
* uint8   ranges from 0 to 2 ** 8 - 1
* uint16  ranges from 0 to 2 ** 16 - 1
* ...
* uint256 ranges from 0 to 2 ** 256 - 1

```
uint8 public u8 = 1
```

### 变量
三种类型： local, state, global

local: 在函数内申明，不会存在链上。
state: 在函数外申明，会存在链上。
global: 提供区块链的信息

```
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Variables {
    // State.
    string public text = "Hello";
    uint public num = 123;

    function doSomething() public {
        // Local.
        uint i = 456;

        // Global：block.timestamp， msg.sender ...
        uint timestamp = block.timestamp; // Current block timestamp
        address sender = msg.sender; // address of the caller
    }
}
```

## 常量
用 `constant` 定义。

```
uint public constant MY_UINT = 123;
```

## Immutable
只能在 构造器 来设置，之后都不能改。

```
address public immutable MY_ADDRESS;
uint public immutable MY_UINT;

constructor(uint _myUint) {
    MY_ADDRESS = msg.sender;
    MY_UINT = _myUint;
}
```

## Ether and Wei
Gas 的费用单位
```
uint public oneWei = 1 wei;
// 1 wei is equal to 1
bool public isOneWei = 1 wei == 1;

uint public oneEther = 1 ether;
// 1 ether is equal to 10^18 wei
bool public isOneEther = 1 ether == 1e18;
```

Gas Limit
* gas limit (max amount of gas you're willing to use for your transaction, set by you)
* block gas limit (max amount of gas allowed in a block, set by the network)

## if/else
和 js 语法一样：
```
if (x < 10) {
    return 0;
} else if (x < 20) {
    return 1;
} else {
    return 2;
}
x < 10 ? 1 : 2;
```

## 循环
和js的语法一样：
```
for (uint i = 0; i < 10; i++) {
    if (i == 3) {
        // Skip to next iteration with continue
        continue;
    }
    if (i == 5) {
        // Exit loop with break
        break;
    }
}

// while loop
uint j;
while (j < 10) {
    j++;
}
```

## Mapping
类似 对象。

```
mapping(address => uint) public myMap


function get(address _addr) public view returns (uint) {
    // Mapping always returns a value.
    // If the value was never set, it will return the default value.
    return myMap[_addr];
}

function set(address _addr, uint _i) public {
    // Update the value at this address
    myMap[_addr] = _i;
}

function remove(address _addr) public {
    // Reset the value to the default value.
    delete myMap[_addr];
}
```

## 数组
```
uint[] public arr;
uint[] public arr2 = [1, 2, 3];

arr.push(3)
arr.pop()
arr.length
```

## 枚举
```
 enum Status {
    Pending,
    Shipped,
    Accepted,
    Rejected,
    Canceled
}
Status.Shipped
```

## Structs
结构体。
```
struct Todo {
    string text;
    bool completed;
}

// An array of 'Todo' structs
Todo[] public todos;

Todo todo = Todo({text: _text, completed: false});
todos.push(todo)

todo.text
todo.completed
```

## 变量存的位置
* storage - variable is a state variable (store on blockchain)
* memory - variable is in memory and it exists while a function is being called
* calldata - special data location that contains function argument

不理解：calldata。

## 函数
```
function returnMany()
    public
    pure
    returns (
        uint,
        bool,
        uint
    )
{
    return (1, true, 2);
}
```

函数修饰符： 
* View: 函数不会写 state
* Pure: 函数不会读和写 state


Visibility。可访问性：
* public - any contract and account can call
* private - only inside the contract that defines the function
* internal- only inside contract that inherits an internal function
* external - only other contracts and accounts can call

modify: 在函数的前，后，插入逻辑。一个函数可以有多个 modify。`_` 是函数。
```
modifier onlyOwner() {
    require(msg.sender == owner, "Not owner");
    // Underscore is a special character only used inside
    // a function modifier and it tells Solidity to
    // execute the rest of the code.
    _;
}

// Modifiers can take inputs. This modifier checks that the
// address passed in is not the zero address.
modifier validAddress(address _addr) {
    require(_addr != address(0), "Not valid address");
    _;
}

function changeOwner(address _newOwner) public onlyOwner validAddress(_newOwner) {
    owner = _newOwner;
}

modifier noReentrancy() {
    require(!locked, "No reentrancy");

    locked = true;
    _;
    locked = false;
}
```

## Error
抛错。

```
require(_i > 10, "Input must be greater than 10");
// 等价于
if (_i <= 10) {
    revert("Input must be greater than 10");
}
assert(_i > 10)
```

可以 try/catch. 只能catch 外部函数的调用和合约的创建。
```
try foo.myFunc(_i) returns (string memory result) {
    emit Log(result);
} catch {
    emit Log("external call failed");
}
```

## Event
事件。可以监听某个智能合约的任意的事件。

```
event Log(address indexed sender, string message);
event AnotherLog();

function test() public {
    // 触发事件
    emit Log(msg.sender, "Hello World!");
    emit Log(msg.sender, "Hello EVM!");
    emit AnotherLog();
}
```

## 继承/接口实现
继承
```
contract X {
    string public name;

    constructor(string memory _name) {
        name = _name;
    }
    // 需要实现的方法：virtual
    function foo() public pure virtual returns (string memory) {
        return "A";
    }
}

contract Y {
    string public text;

    constructor(string memory _text) {
        text = _text;
    }

    // 具体实现：override
    function foo() public pure virtual override returns (string memory) {
        return "B";
    }
}

contract B is X("Input to X"), Y("Input to Y") {

}
```

## 接口
用 interface 定义。要求。：
* cannot have any functions implemented
* can inherit from other interfaces
* all declared functions must be external
* cannot declare a constructor
* cannot declare state variable

```
interface ICounter {
    function count() external view returns (uint);

    function increment() external;
}
```

## Payable
可接收ether的地址的变量类型。

```
address payable public owner;

// Payable constructor can receive Ether
constructor() payable {
    owner = payable(msg.sender);
}
```

发送 Ether 的方法。 在 payable 的地址有如下方法：
* transfer (2300 gas, throws error): 失败的时候抛错。
* send (2300 gas, returns bool)： 失败的时候返回 false。
* call (forward all gas or set gas, returns bool)

```
<address payable>.transfer(amount)
msg.sender.transfer(1 eth)
msg.sender.call.value(amount)
```

意思是： 当前合约向某个地址转 amount 个 eth。


详情： [Sending Ether (transfer, send, call)](https://solidity-by-example.org/sending-ether/)

## 调用链上的函数
`addr.call(abi.encodeWithSignature("transfer(address,uint256)", 0xSomeAddress, 123))`

## import
```
import "./Foo.sol";
import {Unauthorized, add as func, Point} from "./Foo.sol";
import "https://github.com/owner/repo/blob/branch/path/to/Contract.sol";
```

## Library
工具方法的封装：
```
library Math {
    function sqrt(uint y) internal pure returns (uint z) {
        if (y > 3) {
            z = y;
            uint x = y / 2 + 1;
            while (x < z) {
                z = x;
                x = (y / x + x) / 2;
            }
        } else if (y != 0) {
            z = 1;
        }
        // else z = 0 (default value)
    }
}
```

## 其他
msg.sender: 调用合约者
msg.value: 随消息发送的wei的数量。

address(this)： 当前智能合约的地址。address(this).balance。

### assembly
汇编
```
assembly {
  // start writing evm assembler language
}
```

https://docs.soliditylang.org/en/latest/assembly.html

https://learnblockchain.cn/article/675#%E6%B1%87%E7%BC%96%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86%E4%BB%8B%E7%BB%8D

### 全局变量
https://docs.soliditylang.org/en/develop/units-and-global-variables.html

## [发送和接收 以太币](https://solidity-cn.readthedocs.io/zh/develop/security-considerations.html)
如果一个合约收到了 以太币Ether （且没有函数被调用），就会执行 fallback 函数。 如果没有 fallback 函数，那么 以太币Ether 会被拒收（同时会抛出异常）。为了确保你的合约可以通过这种方式收到 以太币Ether，请你核对 fallback 函数所需的 gas 数量。

 你只可以将以太币一起发送至拥有 payable 修饰符的函数，不然会抛出异常。


