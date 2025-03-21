<script lang="ts">
	let figlet = `
	                                                                                                                                                               
                                                                                                                                                               
                                              tttt            iiii                            iiii                                                             
                                           ttt:::t           i::::i                          i::::i                                                            
                                           t:::::t            iiii                            iiii                                                             
                                           t:::::t                                                                                                             
   ooooooooooo   ppppp   ppppppppp   ttttttt:::::ttttttt    iiiiiiivvvvvvv           vvvvvvviiiiiii     eeeeeeeeeeee  wwwwwww           wwwww           wwwwwww
 oo:::::::::::oo p::::ppp:::::::::p  t:::::::::::::::::t    i:::::i v:::::v         v:::::v i:::::i   ee::::::::::::ee w:::::w         w:::::w         w:::::w 
o:::::::::::::::op:::::::::::::::::p t:::::::::::::::::t     i::::i  v:::::v       v:::::v   i::::i  e::::::eeeee:::::eew:::::w       w:::::::w       w:::::w  
o:::::ooooo:::::opp::::::ppppp::::::ptttttt:::::::tttttt     i::::i   v:::::v     v:::::v    i::::i e::::::e     e:::::e w:::::w     w:::::::::w     w:::::w   
o::::o     o::::o p:::::p     p:::::p      t:::::t           i::::i    v:::::v   v:::::v     i::::i e:::::::eeeee::::::e  w:::::w   w:::::w:::::w   w:::::w    
o::::o     o::::o p:::::p     p:::::p      t:::::t           i::::i     v:::::v v:::::v      i::::i e:::::::::::::::::e    w:::::w w:::::w w:::::w w:::::w     
o::::o     o::::o p:::::p     p:::::p      t:::::t           i::::i      v:::::v:::::v       i::::i e::::::eeeeeeeeeee      w:::::w:::::w   w:::::w:::::w      
o::::o     o::::o p:::::p    p::::::p      t:::::t    tttttt i::::i       v:::::::::v        i::::i e:::::::e                w:::::::::w     w:::::::::w       
o:::::ooooo:::::o p:::::ppppp:::::::p      t::::::tttt:::::ti::::::i       v:::::::v        i::::::ie::::::::e                w:::::::w       w:::::::w        
o:::::::::::::::o p::::::::::::::::p       tt::::::::::::::ti::::::i        v:::::v         i::::::i e::::::::eeeeeeee         w:::::w         w:::::w         
 oo:::::::::::oo  p::::::::::::::pp          tt:::::::::::tti::::::i         v:::v          i::::::i  ee:::::::::::::e          w:::w           w:::w          
   ooooooooooo    p::::::pppppppp              ttttttttttt  iiiiiiii          vvv           iiiiiiii    eeeeeeeeeeeeee           www             www           
                  p:::::p                                                                                                                                      
                  p:::::p                                                                                                                                      
                 p:::::::p                                                                                                                                     
                 p:::::::p                                                                                                                                     
                 p:::::::p                                                                                                                                     
                 ppppppppp                                                                                                                                     
                                                                                                                                                               


	`;
</script>

<section class="container py-16 pt-40 text-foreground">
	<div class="flex flex-col justify-center">
		<div class="flex flex-col gap-y-2">
			<h3 class="text-lg font-medium text-primary">Hi there</h3>
			<h2 class="text-3xl font-bold">Contact</h2>
			<p class="text-pretty text-lg text-muted-foreground">
				Optiview was built by team "ETHack". We are four ETHZ students. Optiview provides a proof of
				concept for a data-driven monitoring and optimizing HVAC systems. All data belongs to their
				respective owners.
				<br />
				<br />
				- Yours, truly, Mika, Yan, Parthiv and Shivram
			</p>
		</div>
		<div class="flex flex-col gap-y-2">
			<pre class="font-mono text-xs font-bold text-muted-foreground">
				{figlet}
			</pre>
		</div>
	</div>
</section>
