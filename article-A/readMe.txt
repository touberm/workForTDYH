commit 1-1
2017-5-9
	�½��ƶ���ҳ��:article-A
	΢��һ���Ӻ���?qqһ���Ӻ���?======�ܷ�ʵ��?
	ҳ���޷�ʵ�ַ���������Ȧ
	һ����������ͨ���ٶȷ���ʵ��http://share.baidu.com/
commit 1-2
	����˰ٶȷ������ �޸���΢�ŵ�ͼ��
	������JiaThis���� 
commit 1-3
	����˵ײ���
	���ͷ����Ϣlogo ����
	���Ʊ�js
	ȷ���޷�ͨ��webҳ����ת΢�ſͻ���(����/����/���������)
	��������ֵ�ý��
commit 1-4
	��Ӷ���ͼƬ
	��������΢��ͼ��
	�ײ�ͼƬ��������,���ʱ����(����,���ÿ�)
	��Ϊ����Ч��
	

	/*��������ע��*/
	scrollTop==0     :    20%
	scrollTop == outerHeight(true) - window.screen.availHeight : 100%


	======>>>>

	scaleֵ = scrollTop/(outerHeight(true)-window.screen.availHeight)*0.8 + 0.2


	scrollTop == outer - 2availHeight  :  0%
	scrollTop == outer - availHeight   :  100%

	scrollTop >= outer - 2availHeight 
	/*END ��������ע��*/

	��Ϊjq����Ч�� ���õ�ַ:http://blog.csdn.net/u011072139/article/details/70208746
	
	jQuery.fn.shake = function (intShakes /*Amount of shakes*/, intDistance /*Shake distance*/, 	intDuration /*Time duration*/) {  
    		this.each(function () {  
      		var jqNode = $(this);  
       		jqNode.css({ position: 'relative' });  
	        for (var x = 1; x <= intShakes; x++) {  
	            jqNode.animate({ left: (intDistance * -1) }, (((intDuration / intShakes) / 4)))  
	            .animate({ left: intDistance }, ((intDuration / intShakes) / 2))  
	            .animate({ left: 0 }, (((intDuration / intShakes) / 4)));  
	             }  
	 	 });  
 	   	return this;  
	}  

	���÷�����
	$("����Ԫ��").shake(����, ����, ����ʱ��);
	����:$("#userName").shake(2, 10, 400);
	
	


	���ύע������
	1.Cname
	2.typeֵ
	3.Mobileֵ