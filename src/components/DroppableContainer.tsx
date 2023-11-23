import React from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../utils/ItemTypes';
import styled from 'styled-components';

const Container = styled.div<{ isOver: boolean }>`
    height: 90px;
    width: 350px;
    border-radius: 5px;
    border: 2px dashed #B6D4EF;
    background: #F4F5F9;
    font-size: 11px;
    color: #2A3546;
    line-height: 90px;
    text-align: center;
    background-color: ${(props: { isOver: boolean }) =>
        props.isOver ? '#B6D4EF' : '#F4F5F9'};
`;

interface DroppableContainerProps {
    onDrop: (item: { id: string; text: string, type: string, config: any }) => void;
}

const DroppableContainer: React.FC<DroppableContainerProps> = ({ onDrop }) => {
    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.BOX,
        drop: (item: any) => {
            onDrop(item);
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    });

    return (
        <Container ref={drop} isOver={isOver}>
            Drag and drop to build your job
        </Container>
    );
};

export default DroppableContainer;
