# 零知证明
> ZK 证明使用密码学允许某人（证明者）向其他人（验证者）证明事实是百分百真实的，但除了特定真实性的陈述之外，不会透露任何额外信息。即能保守秘密，又能让人相信你。
> 比如：可以使用 ZK 证明来证明我拥有某个 NFT 的事实，而无需透露我拥有哪一个、购买时间或所花金额。

有两个应用场景：
1. 保护隐私。因为它们减少了用户之间需要提供的信息量。
2. 提升验证速度。体积小，以更快的速度被完成。

当今市场上最引人注目的两种零知识技术是 **zk-STARK** 和 **zk-SNARK**：
* zk-STARK代表零知识可扩展的透明知识论证。
* zk-SNARK代表零知识简洁非交互式知识论证。

SNARK 在文档和开发人员支持方面比 STARK 有一些明显的优势。

## zk-SNARK
>  zk-SNARK 代表“零知识简洁的非交互式知识论证”，指的是一种证明结构，在这种结构中，人们可以证明拥有某些信息，例如一个秘密密钥，而无需透露该信息，并且之间没有任何交互证明者和验证者。
> [什么是 zk-SNARK？](https://www.bcskill.com/index.php/archives/1192.html)

zk-SNARK 的工作原理是首先将您想要证明的内容转换为关于了解某些代数方程的解的等效形式。

### zcash
Zcash 是 zk-SNARKs 的第一个广泛应用。

Zcash 团队的科学家是世界上最博学的 zk-SNARKs 研究人员之一，并不断致力于提出新的应用程序并提高零知识协议的效率。


## zk-STARK
与 SNARK 不同，STARK 的基础技术依赖于哈希函数。依靠散列函数提供了一些优势：例如抗量子。此外，开始在网络中使用 STARK 不需要可信设置。

zk-STARK 成熟度比 zk-SNARK 差点。

## 资源
* [零知识证明：STARKs 与 SNARKs](https://www.bcskill.com/index.php/archives/1195.html)
* [zk-SNARKs 介绍（零知识证明概述以及如何将 zk-SNARK 集成到以太坊中）](https://www.bcskill.com/index.php/archives/1196.html)
* [ZKP（Zero-Knowledge Proofs）技术调研](https://www.bcskill.com/index.php/amp/1197)
  
## 工具
* https://zokrates.github.io/introduction.html