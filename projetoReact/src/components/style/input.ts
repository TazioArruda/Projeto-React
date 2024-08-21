import styled from "styled-components";

export const  StyledDiv = styled.div`
    position: relative;
    margin-bottom: 35px;

&.active{
    input{
        border-color:#00C247;

        ~ label{
            color:#00c247
        }
    }
}

&.error{
    input{
        border-color: red !important;
        ~ label{
            color: red !important;
        }
    }
}

`

export const StyledLabel = styled.label`
    position: absolute;
    line-height: 19.6px;
    font-size: 14px;
    letter-spacing: .2px;
    top:-9px;
    left: 10px;
    background: #fff;
    padding: 0 8px;
    color: #757575;

`
export const StyledInput = styled.input`
border: 1px solid #e0e0e0;
height: 56px;
background-color: #fff;
border-radius: 16px;
width: 100%;
padding: 0 16px;
outline: none;
color: #757575;

&::placeholder{
    color: #808080;
}
&:focus, &:hover {
    border-color: #00c247;
    outline-color: #80c247;

    ~label{
        color:#00c247
    }
}

`
export const StyledIcon = styled.div`
    position: absolute;
    right:16px;
    top:50%;
    margin-top: -12px;
    color: #808080;
    cursor: pointer;

    svg{
        width: 24px;
        height: 24px;
    }

`