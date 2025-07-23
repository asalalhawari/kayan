
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SendIcon from '@mui/icons-material/Send';
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import {
    Alert,
    Box,
    Button,
    Container,
    FormControl,
    IconButton,
    InputLabel,
    MenuItem,
    Select,
    Snackbar,
    TextField,
    Typography
} from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

const ContactUs = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        countryCode: '+970', 
    });

    const [errorMessage, setErrorMessage] = React.useState('');
    const [successMessage, setSuccessMessage] = React.useState('');
    const [isSubmitting, setIsSubmitting] = React.useState(false);

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
        setIsSubmitting(true);
        setErrorMessage('');
        setSuccessMessage('');
    
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
                setSuccessMessage('Thank you! Your message has been sent successfully. We will get back to you soon.');
                setFormData({ name: '', email: '', phone: '', message: '', countryCode: '+970' });
            } else {
                setErrorMessage(result?.message || 'An error occurred while sending the data.');
            }
        } catch (error) {
            console.error('Request Error:', error);
            setErrorMessage('Failed to connect to the server. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };
    
    return (
        <Box
            id="contactUs"
            component={motion.div}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            sx={{
                width: '100%',
                minHeight: '100vh',
                background: "linear-gradient(135deg, #f8fafc 0%, #e3f2fd 100%)",
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: { xs: '20px', md: '40px' },
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Background decorative elements */}
            <Box
                component={motion.div}
                animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear"
                }}
                sx={{
                    position: "absolute",
                    top: "10%",
                    right: "5%",
                    width: "300px",
                    height: "300px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(25,118,210,0.05) 0%, transparent 70%)",
                    zIndex: 1,
                }}
            />

            <Container
                maxWidth="lg"
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    zIndex: 2,
                }}
            >
                <Box
                    component={motion.div}
                    variants={itemVariants}
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        marginBottom: { xs: 4, md: 6 },
                    }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: '700',
                            color: '#1976d2',
                            fontFamily: 'Montserrat',
                            textTransform: 'uppercase',
                            fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
                            lineHeight: 1.2,
                            mb: 2,
                            background: "linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                    Book a free consultation with our experts 
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                            color: '#666',
                            lineHeight: '1.6',
                            maxWidth: { xs: '90%', sm: '70%', md: '60%' },
                            marginX: 'auto',
                            opacity: 0.8,
                        }}
                    >
                        Get in touch to discuss your healthcare project needs and explore how our 
                        technology services can drive your business forward. Contact us now for a free consultation.
                    </Typography>
                </Box>

                <Box
                    component={motion.div}
                    variants={itemVariants}
                    sx={{
                        width: { xs: '100%', md: '80%', lg: '70%' },
                        display: 'flex',
                        flexDirection: { xs: 'column', lg: 'row' },
                        gap: { xs: 4, lg: 6 },
                        alignItems: 'stretch',
                    }}
                >
                    {/* Contact Form */}
                    <Box
                        sx={{
                            flex: 1,
                            backgroundColor: '#ffffff',
                            borderRadius: '20px',
                            padding: { xs: 3, md: 4 },
                            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                            border: '1px solid rgba(25,118,210,0.1)',
                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 600,
                                color: '#1976d2',
                                mb: 3,
                                textAlign: 'center',
                            }}
                        >
                            Send us a Message
                        </Typography>
                        
                        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                            <Box
                                sx={{
                                    display: 'grid',
                                    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                                    gap: 2,
                                    mb: 2,
                                }}
                            >
                                <TextField
                                    label="Your Name"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '12px',
                                            backgroundColor: '#f8fafc',
                                            '&:hover': {
                                                backgroundColor: '#f1f5f9',
                                            },
                                            '&.Mui-focused': {
                                                backgroundColor: '#ffffff',
                                            },
                                        },
                                    }}
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                                <TextField
                                    label="Your Email"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    type="email"
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '12px',
                                            backgroundColor: '#f8fafc',
                                            '&:hover': {
                                                backgroundColor: '#f1f5f9',
                                            },
                                            '&.Mui-focused': {
                                                backgroundColor: '#ffffff',
                                            },
                                        },
                                    }}
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </Box>

                            <Box sx={{ mb: 2 }}>
                                <Box sx={{ display: 'flex', gap: 1 }}>
                                    <FormControl sx={{ minWidth: 120 }}>
                                        <InputLabel>Code</InputLabel>
                                        <Select
                                            value={formData.countryCode}
                                            label="Code"
                                            onChange={handleCountryCodeChange}
                                            sx={{
                                                borderRadius: '12px',
                                                backgroundColor: '#f8fafc',
                                            }}
                                        >
                                            <MenuItem value="+970">+970</MenuItem>
                                            <MenuItem value="+971">+971</MenuItem>
                                            <MenuItem value="+966">+966</MenuItem>
                                            <MenuItem value="+968">+968</MenuItem>
                                            <MenuItem value="+973">+973</MenuItem>
                                            <MenuItem value="+974">+974</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <TextField
                                        label="Phone Number"
                                        variant="outlined"
                                        fullWidth
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: '12px',
                                                backgroundColor: '#f8fafc',
                                                '&:hover': {
                                                    backgroundColor: '#f1f5f9',
                                                },
                                                '&.Mui-focused': {
                                                    backgroundColor: '#ffffff',
                                                },
                                            },
                                        }}
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                    />
                                </Box>
                            </Box>

                            <TextField
                                label="Your Message"
                                variant="outlined"
                                fullWidth
                                multiline
                                rows={4}
                                required
                                sx={{
                                    mb: 3,
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '12px',
                                        backgroundColor: '#f8fafc',
                                        '&:hover': {
                                            backgroundColor: '#f1f5f9',
                                        },
                                        '&.Mui-focused': {
                                            backgroundColor: '#ffffff',
                                        },
                                    },
                                }}
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                            />

                            <Button
                                type="submit"
                                variant="contained"
                                fullWidth
                                disabled={isSubmitting}
                                endIcon={isSubmitting ? null : <SendIcon />}
                                sx={{
                                    background: "linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)",
                                    borderRadius: '12px',
                                    py: 1.5,
                                    fontSize: '1.1rem',
                                    fontWeight: 600,
                                    textTransform: 'none',
                                    boxShadow: '0 4px 12px rgba(25,118,210,0.3)',
                                    '&:hover': {
                                        background: "linear-gradient(45deg, #1565c0 30%, #1976d2 90%)",
                                        boxShadow: '0 6px 20px rgba(25,118,210,0.4)',
                                        transform: 'translateY(-2px)',
                                    },
                                    '&:disabled': {
                                        background: '#e0e0e0',
                                        color: '#666',
                                    },
                                }}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </Button>
                        </Box>
                    </Box>

                    {/* Contact Information */}
                    <Box
                        sx={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 3,
                        }}
                    >
                        <Box
                            sx={{
                                backgroundColor: '#ffffff',
                                borderRadius: '20px',
                                padding: { xs: 3, md: 4 },
                                boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                                border: '1px solid rgba(25,118,210,0.1)',
                            }}
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 600,
                                    color: '#1976d2',
                                    mb: 3,
                                    textAlign: 'center',
                                }}
                            >
                                Contact Information
                            </Typography>
                            
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    <Box
                                        sx={{
                                            width: '50px',
                                            height: '50px',
                                            borderRadius: '12px',
                                            backgroundColor: '#e3f2fd',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#1976d2',
                                        }}
                                    >
                                        <EmailOutlinedIcon />
                                    </Box>
                                    <Box>
                                        <Typography variant="body2" color="textSecondary">
                                            Email
                                        </Typography>
                                        <Typography variant="body1" fontWeight={600}>
                                            info@kayanhealthcare.com
                                        </Typography>
                                    </Box>
                                </Box>

                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    <Box
                                        sx={{
                                            width: '50px',
                                            height: '50px',
                                            borderRadius: '12px',
                                            backgroundColor: '#e8f5e8',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#4caf50',
                                        }}
                                    >
                                        <SmartphoneIcon />
                                    </Box>
                                    <Box>
                                        <Typography variant="body2" color="textSecondary">
                                            Phone
                                        </Typography>
                                        <Typography variant="body1" fontWeight={600}>
                                            +970 59 123 4567
                                        </Typography>
                                    </Box>
                                </Box>

                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    <Box
                                        sx={{
                                            width: '50px',
                                            height: '50px',
                                            borderRadius: '12px',
                                            backgroundColor: '#fff3e0',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#ff9800',
                                        }}
                                    >
                                        <LocationOnOutlinedIcon />
                                    </Box>
                                    <Box>
                                        <Typography variant="body2" color="textSecondary">
                                            Address
                                        </Typography>
                                        <Typography variant="body1" fontWeight={600}>
                                            Ramallah, Palestine
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>

                        {/* Social Media */}
                        <Box
                            sx={{
                                backgroundColor: '#ffffff',
                                borderRadius: '20px',
                                padding: { xs: 3, md: 4 },
                                boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                                border: '1px solid rgba(25,118,210,0.1)',
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 600,
                                    color: '#1976d2',
                                    mb: 2,
                                    textAlign: 'center',
                                }}
                            >
                                Follow Us
                            </Typography>
                            
                            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                                <IconButton
                                    sx={{
                                        width: '50px',
                                        height: '50px',
                                        backgroundColor: '#1877f2',
                                        color: 'white',
                                        '&:hover': {
                                            backgroundColor: '#166fe5',
                                            transform: 'scale(1.1)',
                                        },
                                    }}
                                >
                                    <FacebookIcon />
                                </IconButton>
                                <IconButton
                                    sx={{
                                        width: '50px',
                                        height: '50px',
                                        backgroundColor: '#0077b5',
                                        color: 'white',
                                        '&:hover': {
                                            backgroundColor: '#006097',
                                            transform: 'scale(1.1)',
                                        },
                                    }}
                                >
                                    <LinkedInIcon />
                                </IconButton>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>

            {/* Success/Error Messages */}
            <Snackbar
                open={!!successMessage}
                autoHideDuration={6000}
                onClose={() => setSuccessMessage('')}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert 
                    onClose={() => setSuccessMessage('')} 
                    severity="success" 
                    icon={<CheckCircleIcon />}
                    sx={{ width: '100%' }}
                >
                    {successMessage}
                </Alert>
            </Snackbar>

            <Snackbar
                open={!!errorMessage}
                autoHideDuration={6000}
                onClose={() => setErrorMessage('')}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert 
                    onClose={() => setErrorMessage('')} 
                    severity="error"
                    sx={{ width: '100%' }}
                >
                    {errorMessage}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default ContactUs;