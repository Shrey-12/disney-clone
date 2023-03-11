import styled from "styled-components";

const Login = (props) => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/assets/cta-logo-one.png" alt="" />
          <SignUp>GET ALL THERE</SignUp>
          <Description>
            This is a cloned site for Disney+ started on 9/3/2023 and I am
            really scared of getting my DBMS score on monday
          </Description>
          <CTALogoTwo src="/assets/cta-logo-two.png" alt="" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  position: absolute;
  background-image: url("/assets/login-background.jpg");
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const CTA = styled.div`
margin-bottom:2vw;
max-width:650px;
flex-wrap:wrap;
display:flex;
flex-direction:column;
justify-content-center;
margin-top:0;
align-items:center;
text-align:center;
margin-right:auto;
margin-left:auto;
transition-timing-function:ease-in;
transition:opacity 5s;
width:100%; 
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;

const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  color: hsla(0, 0%, 95, 3%, 1);
  font-size: 15px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
  max-width: 600px;
  margin-bottom:20px;
  display:inline-block;
  vertical-align:bottom;
  width:100%;
`;

export default Login;
