import { Button, Divider, Form, Input, InputNumber, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { RoutesEnum } from '../enum';
import { useMenu } from '../hooks';

import './LogInPage.scss';

const { Title, Text } = Typography

type FieldType = {
	username?: string;
	desktop?: string;
};

export const LogInPage = () => {
	const navigate = useNavigate();

	useMenu(false);

	const onFinish = (values: FieldType) => {
		localStorage.setItem('agent', values.username ?? '');
		localStorage.setItem('desktop', values.desktop ?? '');
		navigate(RoutesEnum.DESKTOP);
	};


	return (
		<>
			<Title level={2}>Log In</Title>
			<Text>Log in to create tickets and join the queue.</Text>
			<Divider />
			<Form
				name="basic"
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 16 }}
				style={{ maxWidth: 600 }}
				initialValues={{ remember: true }}
				onFinish={onFinish}
				autoComplete="off"
				className='form-login'
			>
				<Form.Item<FieldType>
					label="Username"
					name="username"
					rules={[{ required: true, message: 'Please input your username!' }]}
				>
					<Input />
				</Form.Item>

				<Form.Item<FieldType>
					label="Desktop"
					name="desktop"
					className='form-login__desktop'
					rules={[{ required: true, message: 'Please input your desktop!' }, { min: 1, message: 'Desktop must be greater than 0!' }]}
				>
					<InputNumber min={1} className='form-login__desktop' />
				</Form.Item>

				<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
					<Button type="primary" htmlType="submit">
						Submit
					</Button>
				</Form.Item>
			</Form>
		</>
	)
}