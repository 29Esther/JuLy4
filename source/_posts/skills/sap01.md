---
title: SAP01
date: 2015-07-14 16:35:56
tags:
- Skills
categories:
- writing
---

迭代：
卖萌的弱智版本 到 怪兽哥斯拉
公司: 三大报表（资产覆盖表、损溢表、现金流量表）的最小单位
四大版：
SAP Business Suite + SAP ERP（面向500强）
SAP Business All-in-One（最受欢迎，预先配置）
SAP Business ByDesign（失败产品）
SAP Business One（专业面向中小客户）
菜单：
![menu](../../../../../pics/skills/s/menu.png)

Mm01 Create Material 创建物料
Co01 Create Production Order 创建产品订单
Me21n Create Purchase Order 创建采购订单
Spro SAP后台配置
 
F1 帮助
 
Client：
DEV->100
QAD->300, 500, 600 独立数据，可以有多个，测试用
PRD->800 正式系统，只能有一个
 
Client
Controlling Area
Company Code
1线：
Plant MRP节点
Storage Location 库存地点，逻辑上共同存放东西的地点，每一个物理地点可以对应多个库存点
 
2线：
Sales Organization：负责不同产品的销售
Distribution Channel：分销渠道
Division：产品组/部门 具体产品分类
 
HR线：
Organization Unit
Career Path
 
采购：
1. demand determination
2. Source determination
3. Supplier selection
4. Purchase order processing(从采购申请[me51n/自动生成]中转换过来)
5. Order monitoring
6. Goods receipt
7. Invoice verification
8. Payment processing

有借必有贷，借贷必相等
左资产，右负债（所有者权益）
购买：借：库存，贷：GR/IR
收货：借（Debit）：GR（货物清单）/IR，贷（Credit）：应付账款
实际付款 借：应付账款，贷：现金
 
SRM 采购系统和供应商集合
 
移动平均法
移动加权平均法
一阶指数平滑法
二阶指数平滑法
最小二乘法
趋势模型
趋势季节模型
 
MRP|
Planned Order | PR
Capacity Levelity
PU
Production Order
|           MRP          | 
|---|---|
|   Planned Order   | PR |
| Capacity Levelity | PU |
| Production Order  |    |
 

 
Production - Manufacturing
1. Production planning
2. Order creation
3. Order release
4. Order printing
5. Material staging
6. Order execution
7. Confirmations 报工，实际成本
8. Goods receipt
 
Bill of Material 是PP阶段的关键
+
Routing 供应路线，成本所在
=
计划成本
 
收货的时候，借：库存，贷：订单（收货的时候，订单尚未结算，成本未知）
 
SCM最最最难！！！
Supply Chain Management
最优化资源
 
销售：
三部：销售订单-> 交货 -> 开票
1. Sales order
2. Availiability check
3. Outbound belivery 捡货出库
4. Transportation
5. Picking
6. Goods issue
7. Billing 开票收钱
8. Payment process

出库：借：销售成本；贷：库存
开票：借：应收账款（SAP系统中-客户）；贷：主营业务收入
收钱：借：现金；贷：应收账款（SAP系统中-客户）

五大核心模块
FI CO SD PP MM
衍生模块
HR CS PM PS VMS DBM WM

PLM = ECM(工程管理) + PM(设备管理，企业内部资产) + QM(质量管理) + PS(项目管理，各阶段预算成本资源) + EHS(环境健康安全)

财务


