import React from 'react'
import PropTypes from 'prop-types'
import {Table, Popconfirm, Button} from 'antd'

const ProductList = ({onDelete, products}) => {
    const columns = [{
        title: 'Name',
        dataIndex: 'name',
        key: '1'
    }, {
        title: 'Action',
        key: '2',
        render: (text, record) => {
            return (
                <Popconfirm title="Delete?" onConfirm={() => {onDelete(record.id)}} >
                    <Button>Delete</Button>
                </Popconfirm>
            )
        }
    }];

    return (
        <Table
            dataSource={products}
            columns={columns}
        />
    )
}

ProductList.prototype = {
    onDelete: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
};

export default ProductList;
