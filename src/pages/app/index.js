import React, { useState } from 'react'
import {
  Form,
  Input,
  Button,
  Modal,
  Tag,
  List
} from 'antd-mobile'
import { CheckCircleFill } from 'antd-mobile-icons'


export default () => {
    const [form] = Form.useForm()

    const onFinish = (values) => {
        let {a,b,c,d,e} = values;
        a = Number(a)
        b = Number(b)
        c = Number(c)
        d = Number(d)
        e = Number(e)
        console.log(a,b,c,d,e)
        const fenafter = (((a*b)+(c*e))/(b+e));
        const shouyilvBefore = (((a-c)/a)*100);
        const shouyilvAfter = ((fenafter - values.c)/fenafter)*100;
        const changeShouyilv = shouyilvBefore - shouyilvAfter;
        const changeChengb = (values.a - fenafter);
        handleResult({fenafter,shouyilvBefore,shouyilvAfter,changeShouyilv,changeChengb})
      }

      const handleResult = ({fenafter,shouyilvBefore,shouyilvAfter,changeShouyilv,changeChengb}) => {
        Modal.show({
            header: (
              <CheckCircleFill
                style={{
                  fontSize: 36,
                  color: '#00b578',
                }}
              />
            ),
            title: '执行结果',
            actions:[
                {
                  key: 'confirm',
                  text: '我知道了',
                },
            ],
            content: (
              <div>
                <div>
                        <List header="购买前">
                            <List.Item style={{fontSize: 14}}>购买前持有收益率：<span>{getNum(shouyilvBefore) + '%' || '暂无'}</span></List.Item>
                        </List>
                </div>
                <div>
                        <List header="购买后">
                            <List.Item style={{fontSize: 14}}>购买后持有收益率：<span>{getNum(shouyilvAfter) + '%' || '暂无'}</span></List.Item>
                            <List.Item style={{fontSize: 14}}>收益率变化：<span>{getNum(changeShouyilv) + '%' || '暂无'}</span></List.Item>
                            <List.Item style={{fontSize: 14}}>购买后的持仓成本价格：<span>{getNum(fenafter) + '元' || '暂无'}</span></List.Item>
                            <List.Item style={{fontSize: 14}}>持仓成本变化：<span>{getNum(changeChengb) + '元' || '暂无'}</span></List.Item>
                        </List>
                </div>
              </div>
            ),
            showCloseButton: true,
            closeOnAction: true

        })
      }

      const handleChangeD = (val) => {
        const c = form.getFieldValue('c');
        const value = val/c;
        form.setFieldsValue({"e": value})
     }
    
     const getNum = (val) => {
        if(typeof val === 'number') {
           return val.toFixed(2)
        } else {
           return '-'
        }
     }

     const handleChangeC = (val) => {
        const d = form.getFieldValue('d');
        const value = d/val;
        form.setFieldsValue({"e": value})
     }

    return (
        <div>
            <Form
                onFinish={onFinish}
                form={form}
                footer={
                <Button block type='submit' color='primary' size='samll'>
                    提交
                </Button>
                }
            >
                <Form.Item
                    name='a'
                    label='持仓成本'
                    rules={[
                        { required: true }
                    ]}
                >
                    <Input type="number" placeholder='请输入持仓成本' />
                </Form.Item>
                <Form.Item
                    name='b'
                    label='持仓份额'
                    rules={[
                        { required: true }
                    ]}
                >
                    <Input type='number' placeholder='请输入持仓份额' />
                </Form.Item>
                <Form.Item
                    name='c'
                    label='基金净值'
                    rules={[
                        { required: true }
                    ]}
                >
                    <Input type='number' onChange={handleChangeC} placeholder='请输入基金净值' />
                </Form.Item>
                <Form.Item
                    name='d'
                    label='当前购买金额'
                    rules={[
                        { required: true }
                    ]}
                >
                    <Input type='number' onChange={handleChangeD} placeholder='请输入购买金额' />
                </Form.Item>
                <Form.Item
                    name='e'
                    label='当前购买份额'
                    rules={[
                        { required: true }
                    ]}
                >
                    <Input type='number' placeholder='实际购买份额' />
                </Form.Item>
            </Form>
      
            {/* <h2>购买前</h2>
            <p>购买前持有收益率：<span>{getNum(shouyilvBefore) + '%' || '暂无'}</span></p>
            <h2>购买后</h2>
            <p>购买后的持仓成本价格：<span>{getNum(fenafter) || '暂无'}</span></p>
            <p>购买后持有收益率：<span>{getNum(shouyilvAfter) + '%' || '暂无'}</span></p>
            <p>收益率变化：<span>{getNum(changeShouyilv) + '%' || '暂无'}</span></p>
            <p>持仓成本变化：<span>{getNum(changeChengb) || '暂无'}</span></p> */}
        </div>
    )
}
