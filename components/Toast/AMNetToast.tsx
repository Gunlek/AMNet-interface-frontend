import * as RadixToast from '@radix-ui/react-toast'
import styled from "styled-components";
import { SmallStyledGreenButton, StyledButton, StyledGreenButton } from '../Button/style';

const Viewport = styled(RadixToast.Viewport)`
    position: fixed;
    bottom: 0;
    right: 0;
    width: 350px;
    height: auto;

    max-width: 100vw;
`;

const StyledToast = styled(RadixToast.Root)`
    list-style: none;
    background-color: #E8EFEA;
    padding: 10px;
    margin: 10px;

    box-sizing: border-box;

    border-radius: 5px;
    box-shadow: 0px 0px 20px rgba(33, 33, 33, 0.4);

    display: grid;
    grid-template-columns: 1fr, 1fr;
    gap: 5px;

    &[data-state='open'] {
        animation: slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1);
    }
    &[data-state='closed'] {
        animation: hide 100ms ease-in;
    }

    @keyframes hide {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
    }

    @keyframes slideIn {
        from {
            transform: translateX(calc(100% + 25px));
        }
        to {
            transform: translateX(0);
        }
    }
`;

const StyledTitle = styled(RadixToast.Title)`
    grid-column: 1;
    grid-row: 1 / span 1;

    font-weight: bold;
    color: #eee;

    font-size: 15px;
`;

const StyledDescription = styled(RadixToast.Description)`
    grid-column: 1;
    grid-row: 2 / span 1;
    color: #096A09;
    font-size: 13px;
`;

const StyledClose = styled(RadixToast.Close)`
    grid-column: 2;
    grid-row: 1 / span 2;
`;

const VerticallyCentered = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
`;

export const AMNetToast = ({open, onOpenChange, title, description, link, linkText}: {
    open?: boolean, 
    onOpenChange?: (open: boolean) => void,
    title?: string,
    description: string,
    link?: string,
    linkText?: string,
}) => {
	return (
        <RadixToast.Provider
            swipeDirection='right'
            label='Notification'
            duration={2000}
        >
            <StyledToast open={open} onOpenChange={onOpenChange}>
                <StyledTitle>{title}</StyledTitle>
                <StyledDescription>{description}</StyledDescription>
                {/* <RadixToast.Action altText="Press escape to close"/> */}

                <StyledClose asChild>
                    <VerticallyCentered>
                        <StyledGreenButton style={{
                            height: '30px',
                            width: 'auto',
                            fontSize: '15px',
                            padding: '0 10px'
                        }}>
                            Fermer
                        </StyledGreenButton>
                    </VerticallyCentered>
                </StyledClose>
            </StyledToast>

            <Viewport />
        </RadixToast.Provider>
    );
}