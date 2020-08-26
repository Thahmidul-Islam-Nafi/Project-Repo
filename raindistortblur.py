import numpy as np
import matplotlib.pyplot as plt
import cv2
from scipy import signal
import math
def generate_random_lines(imshape,slant,drop_length,rangeval):    
	drops=[]    
	for i in range(rangeval): ## If You want heavy rain, try increasing this        
		if slant<0:            
			x= np.random.randint(slant,imshape[1])        
		else:            
			x= np.random.randint(0,imshape[1]-slant)        
		y= np.random.randint(0,imshape[0]-drop_length)        
		drops.append((x,y))    
	return drops            
def add_rain(image,blur,droprange):        
	imshape = image.shape    
	slant_extreme=10    
	slant= np.random.randint(-slant_extreme,slant_extreme)     
	drop_length=20    
	drop_width=2    
	drop_color=(200,200,200) ## a shade of gray    
	rain_drops= generate_random_lines(imshape,slant,drop_length,droprange)        
	for rain_drop in rain_drops:        
		cv2.line(image,(rain_drop[0],rain_drop[1]),(rain_drop[0]+slant,rain_drop[1]+drop_length),drop_color,drop_width)    
	image= cv2.blur(image,(blur,blur)) ## rainy view are blurry        
	brightness_coefficient = 0.7 ## rainy days are usually shady     
	image_HLS = cv2.cvtColor(image,cv2.COLOR_RGB2HLS) ## Conversion to HLS    
	image_HLS[:,:,1] = image_HLS[:,:,1]*brightness_coefficient ## scale pixel values down for channel 1(Lightness)    
	image_RGB = cv2.cvtColor(image_HLS,cv2.COLOR_HLS2RGB) ## Conversion to RGB    



	
	return image_RGB





def rainblurdistort(testimg,intensity,blur,distlevel):
	img= cv2.imread(testimg)
	cv2.imshow('Input', img)
	distimg = add_rain(img,blur,intensity)
	
	rows, cols,channelno = distimg.shape


	# Vertical wave

	img_output = np.zeros(distimg.shape, dtype=distimg.dtype)

	for i in range(rows):	
		for j in range(cols):
			offset_x = int(distlevel * math.sin(2 * 3.14 * i / 180))    
			offset_y = 0
			if j+offset_x < rows:
				img_output[i,j,:] = distimg[i,(j+offset_x)%cols,:]
			else:
				img_output[i,j,:] = 0
		
	
	cv2.imshow('Vertical wave', img_output)

	k = cv2.waitKey(0)

	if k == ord('s'):                                   # wait for 's' key to save and exit 
		cv2.imwrite('distortednew.png',img_output)
		cv2.destroyAllWindows()


rainblurdistort("01_fisheye_day_test_000276.jpg",750,4,10)