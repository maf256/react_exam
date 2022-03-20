import React, { useEffect, useRef, useState } from 'react';
// import { useTasks, useTasksDispatch } from '../TasksContext.js';

import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { addAction } from '../utils/redux/user/UsersDetailsSlice';

export default function Form() {
      // const { currentUser } = useTasks()
      const currentUser = useSelector(state => state.usersDetails.currentUser);

      const [formData, setFormData] = useState(currentUser)
      // const dispatch = useTasksDispatch()
      const dispatch = useDispatch();
      const idCounter = useRef(1)

      useEffect(() => {
            setFormData(currentUser)
      }, [currentUser])

      const handleChange = (e) => {
            setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
      }

      const handleSubmit = (e) => {
            e.preventDefault();
            const id = formData.id ? formData.id : idCounter.current++
            // dispatch({
            //       type: 'add',
            //       user: { ...formData, id }
            // })
            dispatch(addAction({ ...formData, id }));
            setFormData({ name: "", email: "", username: "", password: "" });
      };

      return (
            <FormContainer>
                  <From onSubmit={handleSubmit}>
                        <label>Display Name:
                              <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                              />
                        </label>
                        <label >Email:
                              <input
                                    type="text"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                              />
                        </label>
                        <label >Username:
                              <input
                                    type="text"
                                    name="username"
                                    required
                                    value={formData.username}
                                    onChange={handleChange}
                              />
                        </label>
                        <label >Password:
                              <input
                                    type="password"
                                    name="password"
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                              />
                        </label>
                        <input
                              type="submit"
                              value="Submit"
                        />
                  </From>
            </FormContainer>
      );
};

const FormContainer = styled.div`
      padding: 30px 0px ;
      width: 100%;
      display: flex;
      justify-content: center;
`
const From = styled.form`
      padding: 10px;
      display: flex;
      flex-direction: column;
      border: 1px solid #ccc;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
      label {
            width: 200px;
      }
      input {
            width: 200px;
            margin-bottom: 5px;
      }
      input[type='submit'] {
            margin-top: 20px;
            cursor: pointer;
      }
`