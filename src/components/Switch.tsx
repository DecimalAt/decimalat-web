import styled from "styled-components";

const SwitchInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
`;

const SwitchLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 40px;
  height: 18px;
  border-radius: 100px;
  border: 1.5px solid ${props => props.theme.colors.selectionColor};
  position: relative;
  transition: background-color 0.2s;
`;

const SwitchButton = styled.span`
  content: "";
  position: absolute;
  top: 1.5px;
  left: 0px;
  width: 12px;
  height: 12px;
  border-radius: 45px;
  transition: 0.2s;
  background: ${props => props.theme.colors.selectionColor};
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  margin-left: 2px;
  ${SwitchInput}:checked + ${SwitchLabel} & {
    left: calc(100% - 4px);
    transform: translateX(-100%);
  }

  ${SwitchLabel}:active & {
    width: 45px;
  }
`;

const Switch = ({ id, toggled, onChange }: any) => {
    return (
        <>
            <SwitchInput
                className="switch-checkbox"
                id={id}
                type="checkbox"
                checked={toggled}
                onChange={onChange}
            />
            <SwitchLabel className="switch-label" htmlFor={id}>
                <SwitchButton className="switch-button" />
            </SwitchLabel>
        </>
    );
};

export default Switch;
