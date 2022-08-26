export interface FooterLegendProps {
    actionDescriptionMap?: unknown;
    onOKActionDescription?: string;
    onCancelActionDescription?: string;
    onSecondaryActionDescription?: string;
    onOptionsActionDescription?: string;
    onMenuActionDescription?: string;
    onButtonDown?: () => void;
    onButtonUp?: () => void;
    onOKButton?: () => void;
    onCancelButton?: () => void;
    onSecondaryButton?: () => void;
    onOptionsButton?: () => void;
    onGamepadDirection?: () => void;
    onGamepadFocus?: () => void;
    onGamepadBlur?: () => void;
    onMenuButton?: () => void;
}