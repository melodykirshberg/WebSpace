import React, { useState, useEffect } from 'react';
import API from "../../utils/API";
import Amplify, { Auth } from 'aws-amplify';
import RegisterForm from "../RegisterForm/RegisterForm"


// gets the information from the Authenticatd user

