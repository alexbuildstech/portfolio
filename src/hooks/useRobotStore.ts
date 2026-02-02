import { create } from 'zustand';

type CameraState = 'home' | 'about' | 'contact';
type RobotExpression = 'neutral' | 'active' | 'success' | 'thinking';

interface RobotState {
    // Input / Interaction
    mouseX: number;
    mouseY: number;
    activeInput: string | null;

    // 3D Scene State
    isRobotLoaded: boolean;
    cameraState: CameraState;
    robotExpression: RobotExpression;

    // Actions
    setMousePosition: (x: number, y: number) => void;
    setActiveInput: (input: string | null) => void;
    setIsRobotLoaded: (loaded: boolean) => void;
    setCameraState: (state: CameraState) => void;
    setRobotExpression: (expr: RobotExpression) => void;
}

export const useRobotStore = create<RobotState>((set) => ({
    mouseX: 0,
    mouseY: 0,
    activeInput: null,

    isRobotLoaded: false,
    cameraState: 'home',
    robotExpression: 'neutral',

    setMousePosition: (x, y) => set({ mouseX: x, mouseY: y }),
    setActiveInput: (input) => set({ activeInput: input }),
    setIsRobotLoaded: (loaded) => set({ isRobotLoaded: loaded }),
    setCameraState: (state) => set({ cameraState: state }),
    setRobotExpression: (expr) => set({ robotExpression: expr }),
}));
