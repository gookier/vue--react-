import React, { useState, useEffect } from 'react'

import { Row, Col, Form, Input, Button, message, Descriptions } from 'antd';

import { mateIn, lastInputMate } from '../../request/api/mate';
const TakeIn = (props) => {
    const [form] = Form.useForm();
    const [info, setInfo] = useState(null);
    const { takeModel } = props;

    //生命周期// 相当于 componentDidMount 和 componentDidUpdate:
    useEffect(() => {
  
    });

    //表单完成
    const onFinish = (value) => {
        mateIn().then(res => {
            if (res.result) {
                longSearch(0, 60, value);
            } else {
                message.error(res.msg)
            }
        })
    }
    //定义30内每500ms轮询一次，500*60
    const longSearch = (i, times, data) => {
        var longtimer = setInterval(() => {
            i++;
            if (i >= times) {
                clearInterval(longtimer);
                this.$message.error(this.$t('上架失败'));
            } else {
                lastInputMate(data).then((res) => {
                    if (res.result) {
                        setInfo({ info: res.mate_info })
                        message.success(this.$t('上架成功'));

                        clearInterval(longtimer);
                    } else {
                        // this.$message.error(res.msg);
                    }
                });
            }
        }, 500);
    }
    return (

        <div>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span={12}>

                    <Form
                        from={form}
                        name="basic"
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 10 }}
                        autoComplete="off"
                        className="border_col"
                        onFinish={onFinish}
                    >
                        {
                            takeModel === 2 &&
                            <>
                                <Form.Item
                                    label="批次号"
                                    name="lot_code"
                                    rules={[{ required: true, message: 'Please input lot code!' }]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    label="物料数量"
                                    name="quantity"
                                    rules={[{ required: true, message: 'Please input quantity!' }]}
                                >
                                    <Input />
                                </Form.Item>
                            </>

                        }

                        <Form.Item
                            label="料架编号"
                            name="shelf_id"
                            rules={[{ required: true, message: 'Please input shelf id!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Trace Code"
                            name="trace_code"
                            rules={[{ required: true, message: 'Please input trace code!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="物料条码"
                            name="label_code"
                            rules={[{ required: true, message: 'Please input label code!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 6, span: 12 }}>
                            {
                                takeModel === 2 &&
                                <Button type="primary" htmlType="submit">
                                    注册上架
                                </Button>
                            }
                            {
                                takeModel === 1 &&
                                <Button type="primary" htmlType="submit">
                                    上架
                                </Button>
                            }
                        </Form.Item>
                    </Form>
                </Col>
                <Col span={12}>

                    <Descriptions title="上架信息" className="border_col">
                        <Descriptions.Item label="物料条码">{info?.label_code}</Descriptions.Item>
                        <Descriptions.Item label="客户名称">{info?.customer_name}</Descriptions.Item>
                        <Descriptions.Item label="供应商(VC)">{info?.supplier_name}</Descriptions.Item>
                        <Descriptions.Item label="产品型号">{info?.steel_model}</Descriptions.Item>
                        <Descriptions.Item label="版本号">{info?.version_num}</Descriptions.Item>
                        <Descriptions.Item label="料架编号">{info?.shelf_id}</Descriptions.Item>
                        <Descriptions.Item label="位置">{info?.position}</Descriptions.Item>
                    </Descriptions>
                </Col>
            </Row>

        </div>
    )

}
export default TakeIn