import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Text from '../typography/Text';
import ColoredText from '../typography/ColoredText';
 

const StyledFooter = styled.footer`
  text-align: center;
  padding: 2rem 0;
  font-size: 1rem;
  background-color: ${(props) => props.theme.colors.lightestBg};
`;

const Footer = ({ className, setLang, staticPages }) => {
   

  return (
    <StyledFooter className={className}>
      <Text textAlign="center" fontSize="0.9rem">
        Select Language:{'  '}
        <a
          href="!"
          onClick={(e) => {
            e.preventDefault();
            setLang('en');
          }}
        >
          EN
        </a>{' '}
        |{' '}
        <a
          href="!"
          onClick={(e) => {
            e.preventDefault();
            setLang('de');
          }}
        >
          DE
        </a>
      </Text>
      <Text textAlign="center" fontSize="0.9rem">
        {staticPages &&
          staticPages.map((page, index, array) => {
            const component = (
              <Link key={page.slug} to={`/${page.slug}`}>
                {page.title}
              </Link>
            );
            if (index < array.length - 1)
              return (
                <span key={page.slug}>
                  {component}
                  {' | '}
                </span>
              );
            else return component;
          })}
      </Text>
      <Text textAlign="center" fontSize="0.9rem">
        <ColoredText>© 2020 Vintage Poker. All rights reserved.</ColoredText>
      </Text>
    </StyledFooter>
  );
};

export default Footer;
