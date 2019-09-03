import React, { Component } from 'react';
import { Header, Icon, Image, TransitionablePortal, Segment, Divider } from 'semantic-ui-react';
import './Main.css';
import { aboutUsInf } from '../../api/dataForComponents';


export class AboutAs extends Component {
    constructor(props) {
        super(props);
        this.refAboutUs = React.createRef();
        this.state = {
            stateRefAboutUs : null,
        }
    }
    componentDidMount() {
        this.setState({
                stateRefAboutUs: this.refAboutUs.current
        })
    }

    render() {
        const regExp = /^photo/i;
        const renderArr = Object.keys(aboutUsInf).filter(el => regExp.test(el));
        const {
            content,
            list,
        } = this.props.sectionData;
         return (
            <div className='containerAboutUs' ref={this.refAboutUs} id='About_Us'>
                <Header as='h2' icon textAlign='center'>
                    <Icon name='users' circular color='green'/>
                    <Header.Content>About Us</Header.Content>
                </Header>
                <Divider className='isDivider'/>
                <div className='wrapperAboutUs'>
                    <p className='descriptionAboutUs'>
                        { content }
                    </p>
                    <div className='photosAboutUs'>
                    {
                        list.map((el, idx) => (
                        <TransitionablePortal
                            key={idx}
                            closeOnTriggerClick
                            openOnTriggerClick
                            mountNode={this.state.stateRefAboutUs}
                            trigger={
                                <Image
                                    src='https://seeklogo.com/images/F/flat-man-icon-logo-A0FEC16B6D-seeklogo.com.png'
                                    circular
                                    className={`wrapperAboutUs_photo photo${idx}`}
                                />
                            }
                        >
                            <Segment className='employeeInf'>
                                <Image
                                    src='https://seeklogo.com/images/F/flat-man-icon-logo-A0FEC16B6D-seeklogo.com.png'
                                    circular
                                    size='tiny'
                                    verticalAlign='top'
                                />
                                <Header style={{color: 'white'}}>{el.title}</Header>
                                <p>{el.post}</p>
                                <p>{el.content}</p>
                            </Segment>
                        </TransitionablePortal>
                    ))}
                    </div>
                </div>
            </div>
        );
    }
}