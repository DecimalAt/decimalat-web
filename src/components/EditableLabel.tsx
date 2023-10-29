import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const LabelContainer = styled.div`
  display: flex;
  align-items: center;
`;

const EditableLabelInput = styled.input`
  border: none;
  outline: none;
  font-size: inherit;
  padding: 0;
`;

const PencilIcon = styled.span`
  margin-left: 5px;
  cursor: pointer;
`;

interface EditableLabelProps {
    label: string;
    onSave: (newLabel: string) => void;
}

const EditableLabel: React.FC<EditableLabelProps> = ({ label, onSave }) => {
    const [isEditing, setEditing] = useState(false);
    const [editedLabel, setEditedLabel] = useState(label);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isEditing && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isEditing]);

    const handleLabelClick = () => {
        setEditing(true);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditedLabel(e.target.value);
    };

    const handleInputBlur = () => {
        setEditing(false);
        onSave(editedLabel);
    };

    return (
        <LabelContainer>
            {isEditing ? (
                <EditableLabelInput
                    ref={inputRef}
                    type="text"
                    value={editedLabel}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                />
            ) : (
                <span onClick={handleLabelClick}>{label}</span>
            )}
            <PencilIcon onClick={handleLabelClick}>✏️</PencilIcon>
        </LabelContainer>
    );
};

export default EditableLabel;
