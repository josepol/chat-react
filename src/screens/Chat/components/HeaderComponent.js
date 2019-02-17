import React, { Component } from 'react';
import styled from 'styled-components';
import ButtonComponent from '../../../components/ButtonComponent';

const HeaderContainer = styled.div`
    display: flex;
    width: 100%;
    height: 70px;
    background-color: white;
`

const ProfileData = styled.div`
    display: flex;
    flex: 3;
    justify-content: space-between;
`

const ProfileIconWrapper = styled.i`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Icon = styled.i`
    color: grey;
    font-size: 38px;
    padding: 5px;
    cursor: pointer;
`

const ProfileNameWrapper = styled.div`
    flex: 5;
    display: flex;
    justify-content: start;
    align-items: center;
`

const ProfileName = styled.p`

`

const RightMenu = styled.div`
    flex: 1
    display: flex;
    justify-content: center;
    align-items: center;
`

export default class HeaderComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <HeaderContainer>
                <ProfileData>
                    <ProfileIconWrapper><Icon className="fas fa-user"></Icon></ProfileIconWrapper>
                    <ProfileNameWrapper>
                        <ProfileName>{this.props.username}</ProfileName>
                    </ProfileNameWrapper>
                </ProfileData>
                <RightMenu><ButtonComponent value={(<Icon className="fas fa-sign-out-alt"></Icon>)}/></RightMenu>
            </HeaderContainer>
        );
    }
}