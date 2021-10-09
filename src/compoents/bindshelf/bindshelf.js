import React from "react";
import { Card, Input, message, List, Empty } from 'antd';
import { StepForwardOutlined } from '@ant-design/icons';

import { sysState, bindShelf, unBindShelf,operateNextMaterial } from '../../request/api/control'
const { Search } = Input;
const BindShelf = () => {
    const onSearch = (value) => {
        bindShelf({shelf_id:value}).then(res =>{
            if (res.result) {
                message.success('绑定料架成功')
                getSysState()
            } else {
                message.error(res.msg)
            }
        })
    }
    const shelfList = []

    const getSysState = () => {
        sysState({}).then(res => {
            if (res.result) {
                let len = res.data.shelf_info.length
                if (len) {
                    shelfList = res.data.shelf_info[0].map((item) => {
                        return String(item.shelf_id).substr(0, 7);
                    })
                }
            } else {
                message.error(res.msg)

            }
        })
    }

    const unBind = (shelf_id) =>{
        unBindShelf({shelf_id:shelf_id}).then(res =>{
            if (res.result) {
                message.success('解绑成功')
            } else {
                message.error(res.msg) 
            }
        })
    }
    // 下一个物料
    const  hanldeNextMaterial = () => {
      operateNextMaterial({}).then(res =>{
          if (res.result) {
              
          } else {
            message.error(res.msg) 
          }
      })
    }

    return (
        <div>
            <Card title="绑定料架" className="control_item_wrap">
                <Search
                    placeholder="input shelf id"
                    allowClear
                    enterButton="绑定"
                    size="large"
                    onSearch={onSearch}
                />
                {
                    shelfList.length > 0 ?
                        <List
                            itemLayout="horizontal"
                            dataSource={shelfList}
                            renderItem={item => (
                                <List.Item className="shelf_list_bg">
                                    <List.Item.Meta
                                        title={item.shelf_id}
                                    />
                                    <div className="shelf_state">在线</div>
                                    <div className="shelf_unbind" onClick={() =>unBind(item.shelf_id)}>解绑</div>
                                </List.Item>
                            )}
                        />
                        : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />

                }

            </Card>
            
            <Card title="操作控制" className="control_operate" extra={ <StepForwardOutlined className="control_svg_right" onClick={hanldeNextMaterial} /> }>
                
            </Card>
            
          



        </div>
    )
}
export default BindShelf