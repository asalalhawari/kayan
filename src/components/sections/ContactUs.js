
import React, { useState } from "react";
import { Container, TextField, Button, useMediaQuery, Box, Typography, MenuItem, Select, InputLabel, FormControl, IconButton } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const ContactUs = () => {
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        countryCode: '+970', 
    });

    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleCountryCodeChange = (e) => {
        setFormData({
            ...formData,
            countryCode: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch('http://localhost:5000/api/send-data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            let result;
            try {
                result = await response.json();
            } catch (jsonError) {
                console.error('Failed to parse JSON response:', jsonError);
                throw new Error('Invalid JSON response from server.');
            }
    
            if (response.ok) {
                setErrorMessage('');
                setFormData({ name: '', email: '', phone: '', message: '', countryCode: '+843' });
            } else {
                setErrorMessage(result?.message || 'An error occurred while sending the data.');
            }
        } catch (error) {
            console.error('Request Error:', error);
            setErrorMessage('Failed to connect to the server. Please try again later.');
        }
    };
    
    return (
        <Container
            id="contactUs"
            maxWidth="lg"
            sx={{
                width: '100%',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: isSmallScreen ? '5%' : '2%',
                overflowX:"hidden"
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    marginTop: isSmallScreen ? '40px' : '75px',
                    marginBottom: isSmallScreen ? '30px' : '25px',
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: '700',
                        color: '#458FF6',
                        fontFamily: 'Josefin Sans',
                        textTransform: 'uppercase',
                        fontSize: isSmallScreen ? '1.5rem' : '30px',
                        lineHeight: 1.2,
                    }}
                >
                    Book a free consultation with our experts 
                </Typography>
                <Typography
                    sx={{
                        fontSize: isSmallScreen ? '0.7rem' : '0.9rem',
                        color: '#666',
                        marginTop: isSmallScreen ? '20px' : '10px',
                        lineHeight: '1.4',
                        maxWidth: isSmallScreen ? '90%' : '50%',
                        marginX: 'auto',
                    }}
                >
                    get touch to discuss your project needs and explore how our technology services can drive your business forward. contact us now for a free consultation.
                </Typography>
            </Box>

            <Box
                sx={{
                    width: isSmallScreen ? '100%' : '70%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#fff',
                    borderRadius: '15px',
                    padding: isSmallScreen ? '20px' : '10px',
                    marginBottom: isSmallScreen ? '30px' : '20px',
                }}
            >
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: isSmallScreen ? '1fr' : '1fr 1fr',
                        gap: '15px',
                        width: '100%',
                    }}
                >
                    <Box>
                        <TextField
                            label="Your Name"
                            variant="outlined"
                            fullWidth
                            sx={{
                                fontFamily: "Roboto",
                                fontWeight: "400",
                                backgroundColor: "rgba(230,230,230,0.5)",
                                borderRadius: '10px',
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'transparent',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'transparent',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'transparent',
                                    },
                                },
                                marginBottom: '10px',
                            }}
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                        <TextField
                            label="Your Email"
                            variant="outlined"
                            fullWidth
                            sx={{
                                backgroundColor: "rgba(230,230,230,0.5)",
                                borderRadius: '10px',
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'transparent',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'transparent',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'transparent',
                                    },
                                },
                                marginBottom: '10px',
                            }}
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        <TextField
                            label="Your Message"
                            variant="outlined"
                            fullWidth
                            sx={{
                                backgroundColor: "rgba(230,230,230,0.5)",
                                borderRadius: '10px',
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'transparent',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'transparent',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'transparent',
                                    },
                                },
                                marginBottom: '10px',
                            }}
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                        />
                    </Box>

                    <Box>
                        <Box sx={{ display: 'flex', gap: '15px', width: '100%', marginBottom: '6px' }}>
                            <FormControl sx={{ width: '30%' }}>
                                <InputLabel>Code</InputLabel>
                                <Select
                                    value={formData.countryCode}
                                    onChange={handleCountryCodeChange}
                                    sx={{
                                        backgroundColor: "rgba(230,230,230,0.5)",
                                        borderRadius: '10px',
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'transparent',
                                        },
                                        '&:hover .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'transparent',
                                        },
                                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'transparent',
                                        },
                                    }}
                                >
                                    <MenuItem value="+972">+972</MenuItem>
                                    <MenuItem value="+970">+970</MenuItem>
                                    <MenuItem value="+44">+44</MenuItem>
                                    <MenuItem value="+1">+1</MenuItem>
                                    <MenuItem value="+843">+843</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField
                                label="Phone Number"
                                variant="outlined"
                                fullWidth
                                sx={{
                                    backgroundColor: "rgba(230,230,230,0.5)",
                                    borderRadius: '10px',
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: 'transparent',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'transparent',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'transparent',
                                        },
                                    },
                                }}
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                            />
                        </Box>
                        <FormControl fullWidth sx={{ marginBottom: '10px' }}>
                            <InputLabel>Select date</InputLabel>
                            <Select
                                value={formData.date || ''}
                                onChange={(e) => handleInputChange({ target: { name: 'date', value: e.target.value } })}
                                sx={{
                                    backgroundColor: "rgba(230,230,230,0.5)",
                                    borderRadius: '10px',
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'transparent',
                                    },
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'transparent',
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'transparent',
                                    },
                                }}
                            >
                                <MenuItem value="2025-04-23">2025-04-23</MenuItem>
                                <MenuItem value="2025-04-24">2025-04-24</MenuItem>
                                <MenuItem value="2025-04-25">2025-04-25</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth sx={{ marginBottom: '10px' }}>
                            <InputLabel>Select timeslot</InputLabel>
                            <Select
                                value={formData.timeslot || ''}
                                onChange={(e) => handleInputChange({ target: { name: 'timeslot', value: e.target.value } })}
                                sx={{
                                    backgroundColor: "rgba(230,230,230,0.5)",
                                    borderRadius: '10px',
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'transparent',
                                    },
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'transparent',
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'transparent',
                                    },
                                }}
                            >
                                <MenuItem value="10:00 AM">10:00 AM</MenuItem>
                                <MenuItem value="2:00 PM">2:00 PM</MenuItem>
                                <MenuItem value="4:00 PM">4:00 PM</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Box>
                <Typography sx={{ color: '#666', fontSize: '0.8rem', alignSelf: 'flex-end', marginBottom: '10px' }}>
                    {formData.message.length}/300
                </Typography>

                {errorMessage && (
                    <Typography sx={{ color: 'red', fontSize: '0.9rem', mb: 1 }}>
                        {errorMessage}
                    </Typography>
                )}

                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        backgroundColor: '#458FF6',
                        borderRadius: '10px',
                        width: "22%",
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                        fontSize: '1rem',
                        padding: '12px',
                        '&:hover': {
                            backgroundColor: '#357ABD',
                        },
                        marginTop: '5px', 
                    }}
                    onClick={handleSubmit}
                >
                    Submit Form →
                </Button>
            </Box>

            <Box
                sx={{
                    width: isSmallScreen ? '100%' : '70%', 
                    textAlign: 'left',
                    marginBottom: isSmallScreen ? '20px' : '40px',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-start', 
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        mb: 4,
                        gap: '20px',
                    }}
                >
                    <Box display="flex" alignItems="center">
                        <IconButton sx={{ border: '2px solid #458FF6', borderRadius: '50%', color: '#458FF6', mr: 1 }}>
                            <LocationOnOutlinedIcon />
                        </IconButton>
                        <Typography
                            sx={{
                                fontSize: '0.8rem',
                                color: '#666',
                                lineHeight: '1.5',
                                fontWeight: '500',
                                fontFamily: 'Montserrat',
                            }}
                        >
                            6386 Spring St undefined, Anchorage, <br />Georgia 12473, United States
                        </Typography>
                    </Box>

                    <Box display="flex" alignItems="center">
                        <IconButton
                            sx={{
                                border: '2px solid #458FF6',
                                fontWeight: '500',
                                fontFamily: 'Montserrat',
                                borderRadius: '50%',
                                color: '#458FF6',
                                mr: 1,
                            }}
                        >
                            <SmartphoneIcon />
                        </IconButton>
                        <Typography sx={{ fontSize: '0.8rem', color: '#666' }}>
                            (843) 555-0130
                        </Typography>
                    </Box>

                    <Box display="flex" alignItems="center">
                        <IconButton sx={{ border: '2px solid #458FF6', borderRadius: '50%', color: '#458FF6', mr: 1 }}>
                            <EmailOutlinedIcon />
                        </IconButton>
                        <Typography
                            sx={{
                                fontSize: '0.8rem',
                                fontWeight: '500',
                                fontFamily: 'Montserrat',
                                color: '#666',
                            }}
                        >
                            willie.jennings@exple.com
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                    <IconButton sx={{ color: '#458FF6' }}>
                        <FacebookIcon sx={{ fontSize: "2.5rem" }} />
                    </IconButton>
                    <IconButton sx={{ color: '#458FF6' }}>
                        <LinkedInIcon sx={{ fontSize: "2.5rem" }} />
                    </IconButton>
                </Box>
            </Box>
        </Container>
    );
};

export default ContactUs;