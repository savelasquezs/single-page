export const Contact = () => {
	const view = `
<form action="">
    <h3> Contact me</h3>
    <hr>
    <div><label for="name">name</label><input type="text" id="name" name="name"></div>
    <div><label for="lastname">lastname</label><input type="text" id="lastname" name="lastname"></div>
    <div><label for="phone">phone</label><input type="text" id="phone" name="phone"></div>
    <div><label for="message">message</label><input type="text" id="message" name="message"></div>
</form>
`;
	return view;
};
