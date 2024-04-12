// src/components/WaterfallGrid.js
import React from 'react';
import { FixedSizeGrid } from 'react-window';
import PostCard from './PostCard'; // 假设已有显示单个笔记的PostCard组件

const COLUMN_COUNT = 2;
const POST_CARD_HEIGHT = 250; // 根据实际设计调整
const fixedColumnWidth = 200;
console.log(window.innerHeight)

const WaterfallGrid = ({ data }) => (
    <div style={{ width: '100%' }}>
        <FixedSizeGrid
            columnCount={COLUMN_COUNT}
            rowCount={Math.ceil(data.length / COLUMN_COUNT)}
            // columnWidth={(index) => (index % 2 === 0 ? 'calc(50% - 10px)' : 'calc(50% + 10px)')} // 左右列宽度微调以错位显示
            columnWidth={fixedColumnWidth} // 为所有列设置一个固定的宽度
            rowHeight={POST_CARD_HEIGHT}
            // height={window.innerHeight}
            height={window.innerHeight}
            width={100}
        >
            {({ columnIndex, rowIndex, style }) => {
                const index = rowIndex * COLUMN_COUNT + columnIndex;
                if (index < data.length) {
                    return (
                        <div style={{ ...style, position: 'relative' }}>
                            <PostCard post={data[index]} />
                        </div>
                    );
                }
                return null; // 空占位
            }}
        </FixedSizeGrid>
    </div>
);

export default WaterfallGrid;