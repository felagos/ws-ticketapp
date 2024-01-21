import { Button, Divider, Form, Input, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { RoutesEnum } from '../enum';
import { useMenu } from '../hooks';

const { Title, Text } = Typography

type FieldType = {
	username?: string;
	password?: string;
};

export const LogInPage = () => {
	const navigate = useNavigate();

	useMenu(false);

	const onFinish = (values: FieldType) => {
		console.log('Success:', values);
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
			>
				<Form.Item<FieldType>
					label="Username"
					name="username"
					rules={[{ required: true, message: 'Please input your username!' }]}
				>
					<Input />
				</Form.Item>

				<Form.Item<FieldType>
					label="Password"
					name="password"
					rules={[{ required: true, message: 'Please input your password!' }]}
				>
					<Input.Password />
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