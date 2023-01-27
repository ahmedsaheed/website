import styled from "styled-components";
import Image from "next/image";
import {  FiExternalLink,
} from "react-icons/fi";

export default function BookCard({
  //@ts-ignore
  small,
  //@ts-ignore
  cover,
  //@ts-ignore
  title,
  //@ts-ignore
  ranking,
  //@ts-ignore
  author,
  //@ts-ignore
  link,
}) {
  return (
    <a
      style={{ cursor: "pointer" }}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <StyledBookCard small={small}>
        <ExternalHoverLink small={small}>
          View on Google Books{" "}
          <FiExternalLink style={{display :"inline"}}/>
        </ExternalHoverLink>
        {cover && (
          <ImageWrapper>
            <img src={cover} alt={title} width={200} height={300} />
          </ImageWrapper>
        )}
        <div className = "bookmeta" style={{textAlign: "center", textDecoration: "none !important"}}>
          <p style={{textDecoration: "none", fontSize: "12px"}}>{title}
            {!small && ranking && `: ${ranking}`}
          </p>
          <span className="metadata">{author}</span>
        </div>
      </StyledBookCard>
    </a>
  );
}

const ImageWrapper = styled.div`
  display: grid;
  place-items: center;
  max-width: 300px;
  max-height: 450px;
  padding: 14px;
`;

const ExternalHoverLink = styled.a`
  position: absolute;
  top: 35%;
  left: ${(props) => (props.small ? "10%" : "18%")};
  transform-origin: center;
  z-index: 1;
  font-family: var(--font-sans);
  background: transparent;
  color: grey;
  padding: var(--space-3xs) var(--space-2xs);
  border-radius: 0.4rem;
  box-shadow: var(--box-shadow-md);
  opacity: 0%;
  transition: opacity 0.3s ease-in-out;
  text-decoration: none;
`;

const StyledBookCard = styled.div`
  display: flex;
  position: relative;
  top: 0;
  left: 0;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
  margin: 0 var(--space-2xs) var(--space-2xs) 0;
  padding: ${(props) =>
    props.small
      ? "0 0 var(--space-xs) 0"
      : "0 var(--space-3xs) var(--space-l) var(--space-3xs)"};
  img {
    transition: all 0.3s ease-in-out;
    border-radius: 0.4rem;
    box-shadow: var(--box-shadow-sm);
    border: 1px solid var(--color-tinted-cream);
  }
  div {
    transition: all 0.3s ease-in-out;
  }
  div p {
    transition: all 0.3s ease-in-out;
    margin: var(--space-2xs) 0 var(--space-3xs) 0;
    line-height: var(--leading-base);
    text-decoration: none;
  }
  &:hover {
    img {
      box-shadow: var(--box-shadow-lg);
      transform: scale3d(1.02, 1.02, 1.02);
      opacity: 20%;
    }
    p {
      color: var(--color-crimson);
    }
    div {
      transform: translateY(4px);
    }
    ${ExternalHoverLink} {
      opacity: 100%;
    }
  }
`;