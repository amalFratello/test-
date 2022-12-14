import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Style.css';
import './FormStyle.css';
function AddCompanyBtn(props) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [compname, setCompname] = useState('');
	const [email, setEmail] = useState('');
	const [address, setAddress] = useState('');
	const [phone, setPhone] = useState('');
	const [comptype, setComptype] = useState('');

	const changeCompname = (event) => {
		setCompname(event.target.value);
	};

	const changeEmail = (event) => {
		setEmail(event.target.value);
	};
	const changeAddress = (event) => {
		setAddress(event.target.value);
	}; const changePhone = (event) => {
		setPhone(event.target.value);
	}; const changeComptype = (event) => {
		setComptype(event.target.value);
	};
	const transferValue = (event) => {
		event.preventDefault();
		if (compname === "") alert("enter company name"); 
		else if (email === "") alert("enter company email"); 
		else if (address === "") alert("enter company address"); 
		else if (phone === "")alert("enter company phone");
		else if( comptype === "") alert("enter company type");
		else {
			const val = {
				compname,
				email,
				address,
				phone,
				comptype
			};
			props.func(val);
			clearState();
		}
	};
	const clearState = () => {
		setCompname('');
		setEmail('');
		setAddress('');
		setPhone('');
		setComptype('');
	};
	return (
		<>
			<Button  className='btn btn-primary bttn' onClick={handleShow} >
				Add Company
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Company Info</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<label className='lab'>Name :</label>
					<br />
					<input type="text" placeholder="enter the company name" value={compname} onChange={changeCompname} className="FormInput" /><br /><br /><br />

					<label className='lab'>E-mail:</label>
					<br />
					<input type="email" placeholder="name@example.com" value={email} onChange={changeEmail} className="FormInput" /><br /><br /><br />

					<label className='lab'>Address:</label>
					<br />
					<input type="text" placeholder="enter the company address" value={address} onChange={changeAddress} className="FormInput" /><br /><br /><br />

					<label className='lab'>Phone Number:</label>
					<br />
					<input type="text" placeholder="enter the company phone" value={phone} onChange={changePhone} className="FormInput" /><br /><br /><br />

					<label className='lab'> Company Type:</label>
					<br />
					<input type="text" placeholder="enter the company type" value={comptype} onChange={changeComptype} className="FormInput" /><br /><br /><br />

				</Modal.Body>
				<Modal.Footer>
					<Button variant="outline-dark" onClick={handleClose}>
						Close
					</Button>
					<Button className='bttn' onClick={transferValue}>
						{props.name}
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}
export default AddCompanyBtn;

