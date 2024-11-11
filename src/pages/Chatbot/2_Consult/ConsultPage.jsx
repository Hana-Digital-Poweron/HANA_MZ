import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Date from "./Date";
import Nav from "../../../components/Nav";
import { OptionList, Option } from "../../../styles/CommonStyles";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 140px);
  overflow-y: scroll; 
  &::-webkit-scrollbar {
      display: none;
    }
  @media (hover: hover) {
    width: 390px; 
    margin: 0 auto;
  }
`;

const Content = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-bottom: 32px;
  height: 100%; 
  &::-webkit-scrollbar {
    display: none;
  }
`;

const MessageSection = styled.div`
  height: calc(100% - 38px);
  padding: 39px 23px 0;
`;

const MessageContainer = styled.div`
  display: flex;
  justify-content: ${({ align }) => (align === 'left' ? 'flex-start' : 'flex-end')};
  margin: 10px 0;
  font-family: 'Pretendard';
  font-size: 13px;
  line-height: 150%;
  letter-spacing: -0.91px;
`;

const MessageBubble = styled.span`
  display: inline-block;
  padding: 10px;
  border-radius: 10px;
  background: ${({ align }) => (align === 'left' ? '#F5F5F5' : '#21B8BF')};
  padding: 10px 15px;
  border-radius: 10px;
  margin-bottom: 10px;
  align-self: ${({ align }) => (align === 'left' ? 'flex-start' : 'flex-end')};
  position: relative;
  height: auto;
  color: ${({ align }) => (align === 'left' ? '#021615' : '#FFF')};
  font-size: 13px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.91px;
  text-align: ${({ align }) => (align === 'left' ? 'left' : 'center')};

  &:after {
    content: "";
    position: absolute;
    top: 10px;
    ${({ align }) => align === 'left' ? 'right' : 'left'}: 100%;
    margin-top: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: ${({ align, theme }) =>
      align === 'left'
        ? `transparent ${theme.color.Gray} transparent transparent`
        : `transparent transparent transparent #21B8BF`};  // Right-aligned: Triangle pointing to the right
  }
`;


const FileBubble = styled(MessageBubble)`
  border-radius: 10px;
  border: 1.5px solid var(--Gray-Font3, #021615);
  width: 90%;
  margin-right: 5%;
  font-size: 13px;
  line-height: 150%;
  letter-spacing: -0.91px;
  background: transparent;
  text-align: center;
`;

const TypingIndicator = styled.p`
  text-align: center;
  font-style: italic;
  color: #888;
`;

const LanguageSettingComponent = styled.div`
  width: 67px;
  height: 22px;
  padding-top: 2px;
  border-radius: 11px;
  background: #d7f0ed;
  color: #07928d;
  text-align: center;
  font-size: 10px;
  font-weight: 800;
  line-height: 150%;
  position: absolute;
  top: -29px;
  right: 0px;
`;

const ChatSendSection = styled.form`
  width: 340px;
  height: 47px;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.color.Font3 || '#ccc'};
  background: #fff;
  margin: 0 auto;
  position: fixed;
  bottom: 89px;
  left: 50%;
  transform: translateX(-50%);
`;

const MessageInputContainer = styled.div`
  display: flex;
  height: 100%;
`;

const MessageTypingInput = styled.input`
  width: 307px;
  height: 100%;
  border-radius: 11px;
  padding-left: 18px;
  color: ${({ theme }) => theme.color.Font1 || '#333'};
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.98px;
  border: none;
`;

const FileUploadButtonComponent = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
`;

const Consult = () => {
  const [conversation, setConversation] = useState([
    { type: 'bot', text: '저는 여러분의 유학 생활을 돕는 챗봇입니다.\n궁금한 부분이 있으시면 얼마든지 물어보세요!' }
  ]);
  const [options, setOptions] = useState([
    '월급(근로비)이 들어왔는지 확인하고 싶어',
    '근로 중 부당한 일을 겪어서 상담하고 싶어',
    '근로계약서를 번역해줘',
    '해외로 송금하고 싶어'
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [isUserResponseShown, setIsUserResponseShown] = useState(false);
  const [isInstitutionChoiceShown, setIsInstitutionChoiceShown] = useState(false);

  const addMessage = (text, type = 'user') => {
    setConversation(prev => [...prev, { type, text }]);
  };

  const delayMessage = (text, type, delay) => {
    setTimeout(() => {
      addMessage(text, type);
      setIsTyping(false);
    }, delay);
  };

  const handleChoice = (choice) => {
    setOptions([]);
    setIsTyping(true);

    if (choice === '근로 중 부당한 일을 겪어서 상담하고 싶어') {
      addMessage(choice, 'user');
      delayMessage('근로 중 부당한 일을 경험하셨군요😢.\n어떤 상황인지 자세히 알려주세요.', 'bot', 500);
      setTimeout(() => {
        setOptions([
          '월급을 받지 못했어',
          '부당하게 해고되었어',
          '직장에서 차별을 당했어',
          '언어적 / 신체적 학대를 당했어',
          '기타'
        ]);
        setIsTyping(false);
      }, 1000);
    } else if (choice === '직장에서 차별을 당했어') {
      addMessage(choice, 'user');
      delayMessage('직장에서 차별을 경험하셨군요.\n어떤 종류의 차별을 당하셨는지 알려주실 수 있을까요?', 'bot', 500);
      setTimeout(() => {
        setOptions([
          '인종이나 국적 차별',
          '성별 또는 성 정체성 차별',
          '종교 또는 신념에 따른 차별',
          '기타'
        ]);
        setIsTyping(false);
      }, 1000);
    } else if (choice === '인종이나 국적 차별') {
      addMessage(choice, 'user');
      delayMessage('차별이 발생한 구체적인 상황을 입력해 주세요. 이 정보는 진술서에 포함됩니다.', 'bot', 500);
      setIsUserResponseShown(true); // 유저 응답 자동 표시 준비 상태로 설정
    } else if (choice === '학교 법률 센터') {
      addMessage(choice, 'user');
      delayMessage(
        '선택하신 기관에 신고가 성공적으로 접수되었습니다.\n신고 진행 상황은 메뉴(마이페이지)에서 확인하실 수 있으며,\n추가로 도움이 필요하시면 언제든지 문의해 주세요!',
        'bot',
        1000
      );
      setOptions([]);
    }
  };

  useEffect(() => {
    if (isUserResponseShown) {
      setTimeout(() => {
        addMessage('...최근 3개월간 일어난 일이야...(중략)...회사 사람들이 내가 외국인이라는 이유로 잘못하지 않아도 나쁜 말을 하고 일을 너무 많이 주고 있어......', 'user');
        
        setTimeout(() => {
          addMessage('<근로 중 인종 또는 국적 차별 진술서 초안.docx>', 'file');
          
          setTimeout(() => {
            addMessage('제공해주신 증거 자료를 토대로 진술서가 작성 완료되었습니다.\n차별 신고는 다음 기관에서 가능합니다. 신고를 진행하실 기관을 선택해 주세요.', 'bot');
            
            setTimeout(() => {
              setOptions(['학교 법률 센터', '노동청', '기타']);
              setIsInstitutionChoiceShown(false);
            }, 500);
            
          }, 1000);
          
        }, 1000);
        
      }, 500);
      
    }
  }, [isUserResponseShown]);
  
  

  return (
    <Container>
        <Content>
        <MessageSection>
            <Date/>
        {conversation.map((message, index) => (
            <MessageContainer key={index} align={message.type === 'bot' ? 'left' : 'right'}>
              {message.text === '<근로 중 인종 또는 국적 차별 진술서 초안.docx>'
                ? <FileBubble align="left">{message.text}</FileBubble>
                : <MessageBubble align={message.type === 'bot' ? 'left' : 'right'}>{message.text}</MessageBubble>
              }
            </MessageContainer>
          ))}
      {isTyping && <TypingIndicator>...챗봇이 타이핑 중입니다...</TypingIndicator>}

      <OptionList>
        {options.map((option, index) => (
          <Option key={index} onClick={() => handleChoice(option)} 
          isSpecial={['직장에서 차별을 당했어', '인종이나 국적 차별', '학교 법률 센터'].includes(option)}>
            {option}
          </Option>
        ))}
      </OptionList>
      </MessageSection>

      <ChatSendSection onSubmit={(e) => e.preventDefault()}>
        <LanguageSettingComponent>Language</LanguageSettingComponent>
        <MessageInputContainer>
          <MessageTypingInput placeholder="궁금하거나 필요한 것을 말씀해주세요" />
          <FileUploadButtonComponent>
            <img src={`${process.env.PUBLIC_URL}/assets/images/chat/clip.svg`} alt="fileUpload" width="16px" />
          </FileUploadButtonComponent>
        </MessageInputContainer>
      </ChatSendSection>
      </Content>
      <Nav />
    </Container>
  );
};

export default Consult;
