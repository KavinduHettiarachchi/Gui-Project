   M S B A M L   `   `   `  ����  GUI    GUI.Menu   5   	   W SPresentationCore, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5   	   R NSystem.Xaml, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	     � Title$  Menu Management��5   	   $	��500��6!   $	��800��6.   .��5      � $��10q�6    � RowDefinitions 5   
   �� 5      $
��Auto �6   �� 5	      $��* �6   �� 5      $
��Auto �6   .+�5   
   ��  �� Orientation$ Vertical=�6   $��0,0,0,10q�6,   .+�5      �� $ 
Horizontal=�6   $��0,5,0,5q�62   .+�5      �� $	��200��6   .+�5      �� $��	Food Name��6    $
��Bold"�61   �� 5      -   5         ��Name$ txtName��5      $	��180��6/   5      �� 5      $	��100��6   $��10,0,0,0q�6)   .+�5      �� $��Price��6    $
��Bold"�6-   �� 5      -   5        $ txtPrice��5      $��80��60   5      �� 5      $	��300��6   $��10,0,0,0q�6)   .+�5      �� $��Description��6    $
��Bold"�63   �� 5      -   5        $ txtAbout��5      $	��280��60   5      �� 5!      -   5        $	��Add��5!      $��80��6=   $��	10,20,0,0q�6H   5"      5#      &   System.Windows.Controls.DataGrid  5&   
   -   5          Name$ FoodDataGrid��5&      $��1��6)      AutoGenerateColumns$ False��66      
IsReadOnly$
 True��6R      SelectionMode$ Single=�6d   $��	0,10,0,10q�6{      Columns 5'      0  *System.Windows.Controls.DataGridTextColumn  5(      ,  &System.Windows.Controls.DataGridColumn	   Header$	 ID��6%   
   Width5  /System.Windows.Controls.DataGridLengthConverter$
 50 6H   1  +System.Windows.Controls.DataGridBoundColumn   Binding 61   �� *Id+6H     5)      $
	 Name��6%   $	
 150 6L    63   �� *Name+6L     5*      $	 Price��6%   $	
 100 6N    64   �� *Price+6N     5+      $	 About��6%   $	
 250 6N    64   �� *About+6N   5-      �� 50   
   $ 
Horizontal=�6   $��Right=�6.   $��0,10,0,0q�6J   $��2��6\   .+�51      �� -   5        $
��Edit��51      $��80��6;   $��0,0,10,0q�6F   �� 52      -   5        $��Delete��52      $��80��6?   53      54      55      