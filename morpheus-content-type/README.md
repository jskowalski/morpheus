<div class=WordSection1>

<p class=MsoListParagraph style='margin-left:.25in;mso-add-space:auto;
text-indent:-.25in;mso-list:l3 level1 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>1.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]>General Concepts</p>

<p class=MsoNormal>The <span class=GramE>morpheus</span> content-type is a
generic hypermedia content-type for line-of-business (LOB) APIs. The morpheus
content-type was developed to create a robust generic contract for applications
between the client and the server. Links play an essential role in client
discovery of the capabilities the server API has to offer.</p>

<p class=MsoNormal>Although not limited to HTTP requests, morpheus was created
using <a href="https://tools.ietf.org/html/rfc2616">HTTP</a> as the transport protocol
of choice. Morpheus requests are made and a <span class=GramE>morpheus</span>
response is received through standard http requests.</p>

<p class=MsoNoSpacing><span class=MsoBookTitle>Resources<o:p></o:p></span></p>

<p class=MsoNormal>A <span class=GramE>morpheus</span> resource can typically
be mapped to persisted storage. A typical LOB pattern may start with a database
table. The server creates a model or entity. This entity serves as a strong
type representation of the table. A business layer is used to govern the
entities and provide any non-persisted (or calculated) fields. Information
about the entity is placed in the resource map which makes it available to all <span
class=SpellE>subscriptionized</span> clients. A <span class=GramE>morpheus</span>
resource is a client side representation of a server business entity.</p>

<p class=MsoNoSpacing><span class=MsoBookTitle>Collections<o:p></o:p></span></p>

<p class=MsoNormal><span class=MsoBookTitle><span style='font-weight:normal;
mso-bidi-font-weight:bold;font-style:normal;mso-bidi-font-style:italic'>A <span
class=GramE>morpheus</span> collection is a defined resource which contains
zero or more resources of the same type. Collections are given special
consideration to standardize operations for paging, sorting, filtering,
nesting, updating, and deleting of resource items as a collection.<o:p></o:p></span></span></p>

<p class=MsoNoSpacing><span class=MsoBookTitle>Links<o:p></o:p></span></p>

<p class=MsoNormal>Resources are made available by the server and are exposed
to the client via links. Most responses will contain links. A map of these
links is provided by a <span class=GramE>morpheus</span> enabled server as they
may change depending which version of the API is in favor, who is making the
request, and which client they are using.</p>

<p class=MsoNoSpacing><span class=MsoBookTitle>Resource Maps<o:p></o:p></span></p>

<p class=MsoNormal>Resources maps are sent from the server for client agents
and client developers. These maps identify the resources that are available on
the server and contain a definition of their properties. Clients can use this
information at design time or run time to perform client-side validation prior
to the submission of a request.</p>

<p class=MsoNoSpacing><span class=MsoBookTitle>Actions<o:p></o:p></span></p>

<p class=MsoNormal>Resource actions provide a way for the client to initiate a
server side state transformation. In addition to the standard crud mappings
(GET, POST, PATCH, <span class=GramE>DELETE</span>) available to resources, a
morpheus server understands the HTTP Method ACTION (tunneling may be required
by the client, see section 3.1.3).</p>

<p class=MsoListParagraph style='margin-left:.25in;mso-add-space:auto;
text-indent:-.25in;mso-list:l3 level1 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>2.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]>Requirements</p>

<p class=MsoNormal>The key words &quot;MUST&quot;, &quot;MUST NOT&quot;,
&quot;REQUIRED&quot;, &quot;SHALL&quot;, &quot;SHALL NOT&quot;,
&quot;SHOULD&quot;, &quot;SHOULD NOT&quot;, &quot;RECOMMENDED&quot;,
&quot;MAY&quot;, and &quot;OPTIONAL&quot; in this document are to be
interpreted as described in <a href="https://tools.ietf.org/html/rfc2119">RFC
2119 [34]</a>.</p>

<p class=MsoNormal>An implementation is not compliant if it fails to satisfy
one or more of the MUST or REQUIRED level requirements for the protocols it
implements. An implementation that satisfies all the MUST or REQUIRED level and
all the SHOULD level requirements for its protocols is said to be
&quot;unconditionally compliant&quot;; one that satisfies all the MUST level
requirements but not all the SHOULD level requirements for its protocols is
said to be &quot;conditionally compliant.&quot;</p>

<p class=MsoListParagraph style='margin-left:.25in;mso-add-space:auto;
text-indent:-.25in;mso-list:l3 level1 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>3.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]>Morpheus HTTP Requests</p>

<p class=MsoNormal style='margin-left:.25in'>Morpheus http requests use
standard and non-standard headers, http methods, query strings and request
payloads to communicate with the server.</p>

<p class=MsoListParagraphCxSpFirst style='margin-left:.55in;mso-add-space:auto;
text-indent:-.3in;mso-list:l3 level2 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>3.1.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]>Http Header</p>

<p class=MsoListParagraphCxSpLast style='margin-left:.85in;mso-add-space:auto;
text-indent:-.35in;mso-list:l3 level3 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>3.1.1.<span style='font:7.0pt "Times New Roman"'> </span></span></span><![endif]>Accept</p>

<p class=MsoNormal style='margin-left:58.5pt'>Clients can request a resource or
a resource collection with the <span class=GramE>morpheus</span> representation
by making an entry in the http header as described below. Morpheus servers MUST
implement the Accept header as follows.</p>

<p class=MsoListParagraph style='margin-left:1.2in;mso-add-space:auto;
text-indent:-.45in;mso-list:l3 level4 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>3.1.1.1.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]>morpheus<span style='mso-spacerun:yes'>  
</span><span style='mso-spacerun:yes'> </span>content-type with Resource Map</p>

<p class=code style='margin-left:1.5in'>Accept: application/morpheus+meta</p>

<p class=MsoListParagraph style='margin-left:1.2in;mso-add-space:auto;
text-indent:-.45in;mso-list:l3 level4 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>3.1.1.2.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]>morpheus<span style='mso-spacerun:yes'>  
</span><span style='mso-spacerun:yes'> </span>content-type without Resource Map</p>

<p class=code style='margin-left:1.5in'>Accept: application/morpheus</p>

<p class=MsoListParagraph style='margin-left:.85in;mso-add-space:auto;
text-indent:-.35in;mso-list:l3 level3 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>3.1.2.<span style='font:7.0pt "Times New Roman"'> </span></span></span><![endif]>Authorization</p>

<p class=MsoNormal style='margin-left:.75in'>Morpheus servers are REQUIRED to
handle security for both <a href="http://tools.ietf.org/html/rfc2617">Basic
Authentication</a> requests and <a
href="https://tools.ietf.org/html/draft-ietf-oauth-v2-bearer-23">Bearer
Authentication</a> requests.</p>

<p class=MsoListParagraph style='margin-left:1.2in;mso-add-space:auto;
text-indent:-.45in;mso-list:l3 level4 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>3.1.2.1.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]>Basic</p>

<p class=code style='margin-left:1.5in'>Authorization: Basic [b64token]</p>

<p class=MsoListParagraph style='margin-left:1.2in;mso-add-space:auto;
text-indent:-.45in;mso-list:l3 level4 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>3.1.2.2.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]>Bearer</p>

<p class=code style='margin-left:1.5in'>Authorization: Bearer [token]</p>

<p class=MsoListParagraph style='margin-left:.55in;mso-add-space:auto;
text-indent:-.3in;mso-list:l3 level2 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>3.2.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]>Http Methods</p>

<p class=MsoNoSpacing style='margin-left:40.5pt'><b style='mso-bidi-font-weight:
normal'>GET<o:p></o:p></b></p>

<p class=MsoNoSpacing style='margin-left:40.5pt'>GET methods MUST be Safe as
outlined in the <a href="https://tools.ietf.org/html/rfc2616#section-9">http
specification</a> and MAY return a response status of 200 and contain the
resource or resource collection as requested.</p>

<p class=MsoNoSpacing style='margin-left:40.5pt'><o:p>&nbsp;</o:p></p>

<p class=MsoNoSpacing style='margin-left:40.5pt'><b style='mso-bidi-font-weight:
normal'>POST, PATCH, PUT, DELETE, ACTION<o:p></o:p></b></p>

<p class=MsoNormal style='margin-left:40.5pt'>The server MAY return a response status
of 200 and SHALL return a [<span class=SpellE>queueMessage</span>] which
contains the id of the newly created resource and the resource link.</p>

<p class=MsoNormal style='margin-left:40.5pt'>The server MAY return a response
status of 203 and SHALL return a [<span class=SpellE>queueMessage</span>] which
contains the id for the [<span class=SpellE>queueMessage</span>] and a link to
the [<span class=SpellE>queueMessage</span>] the client can use to get the
current status. If the current status is complete the [<span class=SpellE>queueMessage</span>]
will contain the id of the newly created resource and the resource link.</p>

<p class=MsoNoSpacing style='margin-left:40.5pt'><b style='mso-bidi-font-weight:
normal'>Errors<o:p></o:p></b></p>

<p class=MsoNoSpacing style='margin-left:40.5pt'>All <span class=GramE>morpheus</span>
server errors WILL return an response status as identified in the <a
href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html">http status code
definition</a>. The body of such a message will contain a <span class=GramE>morpheus</span>
error response. Morpheus enabled servers acting as clients in a client-server daisy
chain, SHALL nest the <span class=GramE>morpheus</span> error into a new
morpheus error and pass along the new error to the initial client request.</p>

<p class=MsoListParagraph style='margin-left:.85in;mso-add-space:auto;
text-indent:-.35in;mso-list:l3 level3 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>3.2.1.<span style='font:7.0pt "Times New Roman"'> </span></span></span><![endif]>GET</p>

<p class=MsoNormal style='margin-left:45.0pt'>A <span class=GramE>morpheus</span>
server MUST implement the http method GET.</p>

<p class=MsoNormal style='margin-left:45.0pt'>GET methods return a <span
class=GramE>morpheus</span> resource or a morpheus resource collection. </p>

<p class=code style='margin-left:45.0pt'>GET: /subscriptions</p>

<p class=MsoNoSpacing style='margin-left:45.0pt'>A collection request which will
return a <span class=GramE>morpheus</span> collection. The collection resource
WILL contain the items property. The items property will be an array of subscription
resources.</p>

<p class=code style='margin-left:45.0pt'><o:p>&nbsp;</o:p></p>

<p class=code style='margin-left:45.0pt'>GET: /subscriptions<span class=GramE>/{</span>id}</p>

<p class=MsoNormal style='margin-left:45.0pt'>A resource request which will
return a response containing a single subscription resource.</p>

<p class=MsoListParagraph style='margin-left:.85in;mso-add-space:auto;
text-indent:-.35in;mso-list:l3 level3 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>3.2.2.<span style='font:7.0pt "Times New Roman"'> </span></span></span><![endif]>POST</p>

<p class=MsoNormal style='margin-left:45.0pt'>A <span class=GramE>morpheus</span>
server MUST implement the http method POST.</p>

<p class=MsoNormal style='margin-left:45.0pt'>POST methods allow the client to
create a new resource. The body of the request SHOULD contain a resource
representation as defined by the resource map. Primary key creation is left to
the server.</p>

<p class=code style='margin-left:45.0pt'>POST: /subscriptions</p>

<p class=MsoNormal style='margin-left:45.0pt'>A request to create a new subscription
resource.</p>

<p class=code style='margin-left:45.0pt'><s><span style='color:red'>POST: /subscription<span
class=GramE>/{</span>id}<o:p></o:p></span></s></p>

<p class=MsoNormal style='margin-left:45.0pt'>A POST request MAY NOT be made to
a specific resource location.</p>

<p class=MsoListParagraph style='margin-left:.85in;mso-add-space:auto;
text-indent:-.35in;mso-list:l3 level3 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>3.2.3.<span style='font:7.0pt "Times New Roman"'> </span></span></span><![endif]>PATCH</p>

<p class=MsoNormal style='margin-left:45.0pt'>A <span class=GramE>morpheus</span>
server MUST implement the http method PATCH.</p>

<p class=MsoNormal style='margin-left:45.0pt'>PATCH methods allow the client to
send partial update requests. By sending an http body sending only the
properties the client wishes to update, the server will validate the request
and persist the changes.</p>

<p class=code style='margin-left:45.0pt'>PATCH: /subscriptions</p>

<p class=MsoNormal style='margin-left:45.0pt'>A request to partially update all
of the subscription resources. Bulk update requests MAY contain query string
values to limit the records updated as defined in Collection Requests.</p>

<p class=code style='margin-left:45.0pt'>PATCH: /subscriptions <span
class=GramE>/{</span>id}</p>

<p class=MsoNormal style='margin-left:45.0pt'>A request to update a specific subscription
resource.</p>

<p class=MsoListParagraph style='margin-left:.85in;mso-add-space:auto;
text-indent:-.35in;mso-list:l3 level3 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>3.2.4.<span style='font:7.0pt "Times New Roman"'> </span></span></span><![endif]>PUT</p>

<p class=MsoNormal style='margin-left:45.0pt'>A <span class=GramE>morpheus</span>
server MAY implement the http method PUT.</p>

<p class=MsoNormal style='margin-left:45.0pt'>PUT methods allow clients to
completely replace the currently stored resource. Unlike PATCH, properties not
provided by the client SHALL be nullified assuming that the final entity values
pass server validation.</p>

<p class=code style='margin-left:45.0pt'><s><span style='color:red'>PUT: /subscriptions<o:p></o:p></span></s></p>

<p class=MsoNormal style='margin-left:45.0pt'>A PUT request MAY NOT be made to
a resource collection.</p>

<p class=code style='margin-left:45.0pt'>PUT: /subscriptions<span class=GramE>/{</span>id}</p>

<p class=MsoNormal style='margin-left:45.0pt'>A request to replace the current
resource with the request body.</p>

<p class=MsoListParagraph style='margin-left:.85in;mso-add-space:auto;
text-indent:-.35in;mso-list:l3 level3 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>3.2.5.<span style='font:7.0pt "Times New Roman"'> </span></span></span><![endif]>DELETE</p>

<p class=MsoNormal style='margin-left:45.0pt'>A <span class=GramE>morpheus</span>
server MAY implement the http method DELETE.</p>

<p class=MsoNormal style='margin-left:45.0pt'>DELETE methods allow clients to
remove or delete a resource from the specified location.</p>

<p class=code style='margin-left:45.0pt'><s><span style='color:red'>DELETE: /subscriptions<o:p></o:p></span></s></p>

<p class=MsoNormal style='margin-left:45.0pt'>A DELETE request MAY NOT be made
to a resource collection.</p>

<p class=code style='margin-left:45.0pt'>DELETE: /subscriptions<span
class=GramE>/{</span>id}</p>

<p class=MsoNormal style='margin-left:45.0pt'>A request to delete the selected
resource.</p>

<p class=MsoListParagraph style='margin-left:.85in;mso-add-space:auto;
text-indent:-.35in;mso-list:l3 level3 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>3.2.6.<span style='font:7.0pt "Times New Roman"'> </span></span></span><![endif]>ACTION</p>

<p class=MsoNormal style='margin-left:40.5pt'>A <span class=GramE>morpheus</span>
server MAY implement the custom http method ACTION</p>

<p class=MsoNormal style='margin-left:40.5pt'>ACTION methods allow the client
to send a request to the server to do work. ACTIONs are typically mapped to
service side method calls to preform work outside of the standard CRUD resource
operations. The last element of the <span class=GramE>url</span> is the action
name. Parameters, if required, are passed through the body using the Action
resource.</p>

<p class=code style='margin-left:40.5pt'>ACTION: /subscriptions/notify</p>

<p class=MsoNormal style='margin-left:40.5pt'>A request to execute an action on
all of the subscription resources. Bulk update requests MAY contain query
string values to limit the records updated as defined in Collection Requests.</p>

<p class=code style='margin-left:40.5pt'>ACTION: /subscriptions<span
class=GramE>/{</span>id}/<span class=SpellE>cancelsubscription</span></p>

<p class=MsoNormal style='margin-left:40.5pt'>A request to execute an action on
a specific subscription.</p>

<p class=MsoListParagraphCxSpFirst style='margin-left:.55in;mso-add-space:auto;
text-indent:-.3in;mso-list:l3 level2 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>3.3.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]>Links</p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:.85in;mso-add-space:
auto;text-indent:-.35in;mso-list:l3 level3 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>3.3.1.<span style='font:7.0pt "Times New Roman"'> </span></span></span><![endif]>Id</p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:.85in;mso-add-space:
auto;text-indent:-.35in;mso-list:l3 level3 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>3.3.2.<span style='font:7.0pt "Times New Roman"'> </span></span></span><![endif]>Method</p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:.85in;mso-add-space:
auto;text-indent:-.35in;mso-list:l3 level3 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>3.3.3.<span style='font:7.0pt "Times New Roman"'> </span></span></span><![endif]>Url</p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:.85in;mso-add-space:
auto;text-indent:-.35in;mso-list:l3 level3 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>3.3.4.<span style='font:7.0pt "Times New Roman"'> </span></span></span><![endif]><span
class=SpellE>ResourceName</span></p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:.85in;mso-add-space:
auto;text-indent:-.35in;mso-list:l3 level3 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>3.3.5.<span style='font:7.0pt "Times New Roman"'> </span></span></span><![endif]><span
class=SpellE>EntityName</span></p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:.85in;mso-add-space:
auto;text-indent:-.35in;mso-list:l3 level3 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>3.3.6.<span style='font:7.0pt "Times New Roman"'> </span></span></span><![endif]><span
class=SpellE>IsTemplate</span></p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:.55in;mso-add-space:
auto;text-indent:-.3in;mso-list:l3 level2 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>3.4.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]>Collection Requests</p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:.85in;mso-add-space:
auto;text-indent:-.35in;mso-list:l3 level3 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>3.4.1.<span style='font:7.0pt "Times New Roman"'> </span></span></span><![endif]>Http
Url <span class=SpellE>QueryString</span></p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:1.2in;mso-add-space:
auto;text-indent:-.45in;mso-list:l3 level4 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>3.4.1.1.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]>q</p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:1.2in;mso-add-space:
auto;text-indent:-.45in;mso-list:l3 level4 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>3.4.1.2.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]>limit</p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:1.2in;mso-add-space:
auto;text-indent:-.45in;mso-list:l3 level4 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>3.4.1.3.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span class=SpellE>pageindex</span></p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:1.2in;mso-add-space:
auto;text-indent:-.45in;mso-list:l3 level4 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>3.4.1.4.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]>fields</p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:1.2in;mso-add-space:
auto;text-indent:-.45in;mso-list:l3 level4 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>3.4.1.5.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]>include</p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:1.2in;mso-add-space:
auto;text-indent:-.45in;mso-list:l3 level4 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>3.4.1.6.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]>where</p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:1.2in;mso-add-space:
auto;text-indent:-.45in;mso-list:l3 level4 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>3.4.1.7.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span class=SpellE>orderby</span></p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:.55in;mso-add-space:
auto;text-indent:-.3in;mso-list:l3 level2 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>3.5.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]>Actions Requests</p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:.85in;mso-add-space:
auto;text-indent:-.35in;mso-list:l3 level3 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>3.5.1.<span style='font:7.0pt "Times New Roman"'> </span></span></span><![endif]>Http
Body</p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:1.2in;mso-add-space:
auto;text-indent:-.45in;mso-list:l3 level4 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>3.5.1.1.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]>Name</p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:1.2in;mso-add-space:
auto;text-indent:-.45in;mso-list:l3 level4 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>3.5.1.2.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]>Data</p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:.25in;mso-add-space:
auto;text-indent:-.25in;mso-list:l3 level1 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>4.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]>morpheus Response</p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:.55in;mso-add-space:
auto;text-indent:-.3in;mso-list:l3 level2 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>4.1.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]>Header</p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:.85in;mso-add-space:
auto;text-indent:-.35in;mso-list:l3 level3 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>4.1.1.<span style='font:7.0pt "Times New Roman"'> </span></span></span><![endif]><span
class=SpellE>HostVersion</span></p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:.85in;mso-add-space:
auto;text-indent:-.35in;mso-list:l3 level3 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>4.1.2.<span style='font:7.0pt "Times New Roman"'> </span></span></span><![endif]>morpheus<span
style='mso-spacerun:yes'>   </span>Version</p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:.85in;mso-add-space:
auto;text-indent:-.35in;mso-list:l3 level3 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>4.1.3.<span style='font:7.0pt "Times New Roman"'> </span></span></span><![endif]><span
class=SpellE>ResourceMap</span></p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:1.2in;mso-add-space:
auto;text-indent:-.45in;mso-list:l3 level4 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>4.1.3.1.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span class=SpellE>EntityName</span></p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:1.2in;mso-add-space:
auto;text-indent:-.45in;mso-list:l3 level4 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>4.1.3.2.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span class=SpellE>ReadOnly</span></p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:1.2in;mso-add-space:
auto;text-indent:-.45in;mso-list:l3 level4 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>4.1.3.3.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span class=SpellE>PropertyMaps</span></p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:1.55in;mso-add-space:
auto;text-indent:-.55in;mso-list:l3 level5 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>4.1.3.3.1.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]>Name</p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:1.55in;mso-add-space:
auto;text-indent:-.55in;mso-list:l3 level5 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>4.1.3.3.2.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span class=SpellE>DataType</span></p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:1.55in;mso-add-space:
auto;text-indent:-.55in;mso-list:l3 level5 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>4.1.3.3.3.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span class=SpellE>DefaultValue</span></p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:1.55in;mso-add-space:
auto;text-indent:-.55in;mso-list:l3 level5 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>4.1.3.3.4.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span class=SpellE>IsPrimaryKey</span></p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:1.55in;mso-add-space:
auto;text-indent:-.55in;mso-list:l3 level5 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>4.1.3.3.5.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span class=SpellE>IsTenantKey</span></p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:1.55in;mso-add-space:
auto;text-indent:-.55in;mso-list:l3 level5 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>4.1.3.3.6.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span class=SpellE>IsForgeinKey</span></p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:1.55in;mso-add-space:
auto;text-indent:-.55in;mso-list:l3 level5 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>4.1.3.3.7.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span class=SpellE>IsDefaultQueryField</span></p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:1.55in;mso-add-space:
auto;text-indent:-.55in;mso-list:l3 level5 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>4.1.3.3.8.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span class=SpellE>IsRequired</span></p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:1.55in;mso-add-space:
auto;text-indent:-.55in;mso-list:l3 level5 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>4.1.3.3.9.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span class=SpellE>IsReadOnly</span></p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:1.55in;mso-add-space:
auto;text-indent:-.55in;mso-list:l3 level5 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>4.1.3.3.10.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span class=SpellE>MaxLength</span></p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:1.55in;mso-add-space:
auto;text-indent:-.55in;mso-list:l3 level5 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>4.1.3.3.11.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span class=SpellE>MinLength</span></p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:1.55in;mso-add-space:
auto;text-indent:-.55in;mso-list:l3 level5 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>4.1.3.3.12.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]>Scale</p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:1.55in;mso-add-space:
auto;text-indent:-.55in;mso-list:l3 level5 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>4.1.3.3.13.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]>Precision</p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:1.55in;mso-add-space:
auto;text-indent:-.55in;mso-list:l3 level5 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>4.1.3.3.14.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span class=SpellE>MinValue</span></p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:1.55in;mso-add-space:
auto;text-indent:-.55in;mso-list:l3 level5 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>4.1.3.3.15.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span class=SpellE>MaxValue</span></p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:1.55in;mso-add-space:
auto;text-indent:-.55in;mso-list:l3 level5 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>4.1.3.3.16.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]>Searchable</p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:1.55in;mso-add-space:
auto;text-indent:-.55in;mso-list:l3 level5 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>4.1.3.3.17.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]>Values</p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:1.2in;mso-add-space:
auto;text-indent:-.45in;mso-list:l3 level4 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>4.1.3.4.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span class=SpellE>ResourceViews</span></p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:1.55in;mso-add-space:
auto;text-indent:-.55in;mso-list:l3 level5 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>4.1.3.4.1.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]>Name</p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:1.55in;mso-add-space:
auto;text-indent:-.55in;mso-list:l3 level5 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>4.1.3.4.2.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]>Link</p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:1.2in;mso-add-space:
auto;text-indent:-.45in;mso-list:l3 level4 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>4.1.3.5.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span class=SpellE>PrimaryKeyField</span></p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:.55in;mso-add-space:
auto;text-indent:-.3in;mso-list:l3 level2 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>4.2.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]>Data</p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:.85in;mso-add-space:
auto;text-indent:-.35in;mso-list:l3 level3 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>4.2.1.<span style='font:7.0pt "Times New Roman"'> </span></span></span><![endif]>Resource</p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:1.2in;mso-add-space:
auto;text-indent:-.45in;mso-list:l3 level4 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>4.2.1.1.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]>Links</p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:1.2in;mso-add-space:
auto;text-indent:-.45in;mso-list:l3 level4 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>4.2.1.2.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]>morpheus<span style='mso-spacerun:yes'>  
</span>Type</p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:1.2in;mso-add-space:
auto;text-indent:-.45in;mso-list:l3 level4 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>4.2.1.3.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span class=SpellE>ResourceName</span></p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:1.2in;mso-add-space:
auto;text-indent:-.45in;mso-list:l3 level4 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>4.2.1.4.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span class=SpellE>PrimaryKeyName</span></p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:.85in;mso-add-space:
auto;text-indent:-.35in;mso-list:l3 level3 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>4.2.2.<span style='font:7.0pt "Times New Roman"'> </span></span></span><![endif]>Collections</p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:1.2in;mso-add-space:
auto;text-indent:-.45in;mso-list:l3 level4 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>4.2.2.1.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]>Links</p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:1.2in;mso-add-space:
auto;text-indent:-.45in;mso-list:l3 level4 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>4.2.2.2.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]>morpheus<span style='mso-spacerun:yes'>  
</span>Type</p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:1.2in;mso-add-space:
auto;text-indent:-.45in;mso-list:l3 level4 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>4.2.2.3.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span class=SpellE>ResourceName</span></p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:1.2in;mso-add-space:
auto;text-indent:-.45in;mso-list:l3 level4 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>4.2.2.4.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span class=SpellE>PrimaryKeyName</span></p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:1.2in;mso-add-space:
auto;text-indent:-.45in;mso-list:l3 level4 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>4.2.2.5.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span class=SpellE>TotalCount</span></p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:1.2in;mso-add-space:
auto;text-indent:-.45in;mso-list:l3 level4 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>4.2.2.6.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span class=SpellE>PageIndex</span></p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:1.2in;mso-add-space:
auto;text-indent:-.45in;mso-list:l3 level4 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>4.2.2.7.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span class=SpellE>PageSize</span></p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:1.2in;mso-add-space:
auto;text-indent:-.45in;mso-list:l3 level4 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>4.2.2.8.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]>Items</p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:.85in;mso-add-space:
auto;text-indent:-.35in;mso-list:l3 level3 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>4.2.3.<span style='font:7.0pt "Times New Roman"'> </span></span></span><![endif]>Tasks</p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:1.2in;mso-add-space:
auto;text-indent:-.45in;mso-list:l3 level4 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>4.2.3.1.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]>Links</p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:1.55in;mso-add-space:
auto;text-indent:-.55in;mso-list:l3 level5 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>4.2.3.1.1.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]>Task/id</p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:1.2in;mso-add-space:
auto;text-indent:-.45in;mso-list:l3 level4 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>4.2.3.2.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]>morpheus<span style='mso-spacerun:yes'>  
</span>Type</p>

<p class=MsoListParagraphCxSpLast style='margin-left:.85in;mso-add-space:auto;
text-indent:-.35in;mso-list:l3 level3 lfo5'><![if !supportLists]><span
style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
style='mso-list:Ignore'>4.2.4.<span style='font:7.0pt "Times New Roman"'> </span></span></span><![endif]>Errors</p>

</div>
