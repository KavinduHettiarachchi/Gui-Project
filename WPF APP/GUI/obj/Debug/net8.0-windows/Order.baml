   M S B A M L   `   `   `  ����  GUI    	GUI.Order   5   	   W SPresentationCore, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5   	   R NSystem.Xaml, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	     � Title$  Order Management��5   	   $	��500��6"   $	��800��6/   .��5      � $��10q�6    � RowDefinitions 5   
   �� 5      $
��Auto �6   �� 5      $��* �6   �� 5	      $
��Auto �6   .+�5   
   ��  �� Orientation$ 
Horizontal=�6   $��0,0,0,10q�6.   .+�5      � $	��150��6   .+�5      �� -   5         ��Name$ txtName��5      $	��150��6+   �� 5      -   5        $��txtNamePlaceholder��5      $��Customer Name��5      
������� J� IsHitTestVisible$ False��5      $��5,0,0,0q�65   $��Center=�5      $y�	Collapsed=�67   5      5      � 5      $	��150��6   $��10,0,0,0q�6   .+�5      �� -   5        $ txtFood��5      $	��150��6+   �� 5      -   5        $��txtFoodPlaceholder��5      $��	Food Item��5      
�������$ False��5      $��5,0,0,0q�65   $��Center=�5      $y�	Collapsed=�67   5      5      � 5      $	��200��6   $��10,0,0,0q�6   .+�5      �� -   5        $ 
txtAddress��5      $	��200��6.   �� 5       -   5        $��txtAddressPlaceholder��5#      $��Address��5       
�������$ False��5!      $��5,0,0,0q�65   $��Center=�5"      $y�	Collapsed=�67   5#      5$      � 5&      $	��150��6   $��10,0,0,0q�6   .+�5'      �� -   5        $ 
txtContact��5'      $	��150��6.   �� 5(      -   5        $��txtContactPlaceholder��5+      $��Contact Number��5(      
�������$ False��5)      $��5,0,0,0q�65   $��Center=�5*      $y�	Collapsed=�67   5+      5,      �� 5.      -	   5        $��	Add Order��5.      $	��100��6@   $��10,0,0,0q�6L   5/      &   System.Windows.Controls.DataGrid  52   
   -
   5          Name$ OrderDataGrid��52      $��1��6*      AutoGenerateColumns$ False��67      SelectionMode$ Single=�6S      Columns 53      0  *System.Windows.Controls.DataGridTextColumn  54      ,  &System.Windows.Controls.DataGridColumn	   Header$	 ID��6%   
   Width5  /System.Windows.Controls.DataGridLengthConverter$
 50 6H   1  +System.Windows.Controls.DataGridBoundColumn   Binding 61   �� *Id+6H     55      $
	 Name��6%   $	
 150 6L    63   �� *Name+6L     56      $
	 Food��6%   $	
 150 6L    63   �� *Food+6L     57      $	 Address��6%   $	
 200 6R    66   �� *	Address+6R     58      $	 Contact��6%   $	
 150 6R    66   �� *	Contact+6R   5:      �� 5=   
   $ 
Horizontal=�6   $��Right=�6.   $��0,10,0,0q�6J   $��2��6\   .+�5>      �� -   5        $��
Edit Order��5>      $	��100��6B   $��0,0,10,0q�6N   �� 5?      -   5        $��Delete Order��5?      $	��100��6F   5@      5A      5B      