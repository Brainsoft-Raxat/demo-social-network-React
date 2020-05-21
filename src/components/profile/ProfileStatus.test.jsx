import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus Component", () => {
    test("Status from the props should be in the state", ()=> {
        const component = create(<ProfileStatus status="Cool" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("Cool");
    });
    test("Span should be displayed with correct status", ()=> {
        const component = create(<ProfileStatus status="Cool" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe("Cool");
    });

    test("Span should be displayed with correct status", ()=> {
        const component = create(<ProfileStatus status="Cool" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span).not.toBeNull();
    });

    test("Input should not be displayed", ()=> {
        const component = create(<ProfileStatus status="Cool" />);
        const root = component.root;
        expect(() => {
            let input = root.findByType("input");
        }).toThrow();
    });

    test("Input should be displayed in edit mode instead of span", ()=> {
        const component = create(<ProfileStatus status="Cool" />);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");
        expect(input.props.value).toBe("Cool");
    });
    test("Callback should be executed", ()=> {
        let mockCallback = jest.fn();
        const component = create(<ProfileStatus status="Cool" updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
        });

});