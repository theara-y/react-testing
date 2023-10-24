import { render } from "@testing-library/react";
import Card from './Card';

it('Should render Card successfully', () => {
    render(<Card />)
})

it('Should match Card snapshots', () => {
    const { asFragment } = render(<Card />);
    expect(asFragment()).toMatchSnapshot()
});